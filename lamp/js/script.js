"use strict";
const baseUrl = window.location;
const pathname = baseUrl.pathname;
let path;

window.addEventListener("load", () => {
  init();
});

function getAllUsers() {
  let endpoint = path + "api/users";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((users) => {
        resolve(users);
      });
  });
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

// function getId(id) {
//   console.log(id);
//   // getUserById(id);
//   window.location.href = path + id + "/user.php";
// }

function configurePath() {
  if (pathname.includes("/fakeid/lamp/")) {
    return "/fakeid/lamp/";
  } else {
    return "/";
  }
}

async function init() {
  path = configurePath();
  let users = await getAllUsers();
  console.log(users);
}
