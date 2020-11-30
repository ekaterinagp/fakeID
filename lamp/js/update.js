"use strict";

let userName = document.querySelector('input[name="name"]').value;
let userAddressID = show_selected("addressSelect");
let userSpouseID = show_selected("spouseSelect");
let userStatus = show_selected("statusSelect");
console.log(userAddressID, userName, userSpouseID, userStatus);

let user = {
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
  event.preventDefault();
  console.log(user);

  const response = await fetch(path + "api/users/" + user.id, {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  // console.log(response);
  // const data = await response.json();
  // console.log(data);
}
