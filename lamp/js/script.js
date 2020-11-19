"use strict";

window.addEventListener("load", () => {
  init();
});

function getAllUsers() {
  let endpoint = "api/api-get-users.php";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((users) => {
        resolve(users);
      });
  });
}

async function init() {
  let users = await getAllUsers();
  console.log(users);
}
