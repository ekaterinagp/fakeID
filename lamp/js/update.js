window.addEventListener("loaded", init);

const userId = new URLSearchParams(window.location.search).get("id");
console.log(userId);
let userToUpdate;
async function init() {
  userToUpdate = await getUserById(userId);
  console.log("here to look", userToUpdate);
}

function show_selected(type) {
  let selector = document.getElementById(type);
  let value = selector[selector.selectedIndex].value;
  console.log(value);
  if (!value) {
    return 0;
  }
  return value;
}

function getDataToUpdate(id) {
  let nameToUpdate = document.querySelector('input[name="name"]').value;
  let addressIDToUpdate = show_selected("addressSelect");
  let spouseToUpdate;
  if (
    userToUpdate[0].marital_status_id == 3 ||
    userToUpdate[0].marital_status_id == 4 ||
    userToUpdate[0].marital_status_id == 6 ||
    userToUpdate[0].marital_status_id == 7 ||
    userToUpdate[0].marital_status_id == 8 ||
    userToUpdate[0].marital_status_id == 1
  ) {
    console.log(" no spouse");
    spouseToUpdate = show_selected("spouseSelect");
  } else {
    console.log("spouse");
    spouseToUpdate = userToUpdate[0].spouse_id;
  }
  let changeStatus;
  let statusToUpdate = show_selected("statusSelect");
  let childToUpdate = show_selected("childSelect");
  if (statusToUpdate == 3 || 4 || 6 || 7 || 1 || 8) {
    changeStatus = "updatestatusForSpouse";
  }

  console.log(spouseToUpdate);

  let userToSend = {
    id: id,
    name: nameToUpdate,
    address_id: addressIDToUpdate,
    spouse_id: spouseToUpdate,
    marital_status_id: statusToUpdate,
    child_id: childToUpdate,
    change_status: changeStatus,
  };

  console.log(userToSend);
  submitUpdateForm(userToSend);
}

async function submitUpdateForm(user) {
  event.preventDefault();
  console.log(user);

  const response = await fetch(path + "api/users/" + user.id, {
    method: "POST",
    body: JSON.stringify(user),
  });

  console.log(response);
  const data = await response.json();
  if (response.status) {
    createNotification("success", "User updated");
  } else {
    createNotification("error", response.message);
  }
}

function changeView(view) {
  let info = document.querySelector(".userContainer .user");
  let edit = document.querySelector(".editContainer");
  let tabs = document.querySelectorAll(".tabs button");
  if (view == "info") {
    edit.style.display = "none";
    info.style.display = "block";
    tabs[0].style.borderBottom = "none";
    tabs[1].style.borderBottom = "1px solid lightgrey";
  } else {
    edit.style.display = "block";
    info.style.display = "none";
    tabs[1].style.borderBottom = "none";
    tabs[0].style.borderBottom = "1px solid lightgrey";
  }
}

function getUserById(id) {
  const endpoint = path + `api/users/` + id;
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        resolve(user);
      });
  });
}
