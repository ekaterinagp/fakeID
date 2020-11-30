"use strict";

// let formData = new FormData();
// document.querySelector("form").addEventListener("change", (event) => {
//   let name = event.target.name;
//   formData.append(event.target.name, event.target.value);
// });

let userName = document.querySelector('input[name="name"]').value;
let userAddressID = show_selected("addressSelect");
let userSpouseID = show_selected("spouseSelect");
let userStatus = show_selected("statusSelect");
console.log(userAddressID, userName, userSpouseID, userStatus);

let user = {
  //add id from the url
  name: userName,
  address_id: userAddressID,
  marital_status_id: userStatus,
  spouse_id: userSpouseID,
};

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
  let spouseToUpdate = show_selected("spouseSelect");
  let statusToUpdate = show_selected("statusSelect");

  let userToUpdate = {
    id: id,
    name: nameToUpdate,
    address_id: addressIDToUpdate,
    spouse_id: spouseToUpdate,
    marital_status_id: statusToUpdate,
  };

  console.log(userToUpdate);
  submitUpdateForm(userToUpdate);
}

async function submitUpdateForm(user) {
  console.log(user);

  const response = await fetch(path + "api/users/" + user.id, {
    method: "POST",
    body: user,
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  // if (data.status == 1) {
  //   window.location.href = path + "/";
  // }
}
