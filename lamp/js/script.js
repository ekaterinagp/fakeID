"use strict";
const baseUrl = window.location;
const pathname = baseUrl.pathname;
let path;

window.addEventListener("load", () => {
  init();
});

function getAllUsers() {
  let endpoint = path+"api/api-get-users.php";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((users) => {
        resolve(users);
      });
  });
}

function configurePath() {
  if(pathname.includes('/fakeid/lamp/')){
    return  '/fakeid/lamp/';
  }else{
    return '/';
  }
}

async function init() {
  path = configurePath()
  let users = await getAllUsers();
  console.log(users);
}
