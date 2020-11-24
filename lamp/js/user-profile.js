"use strict";
const baseUrl = window.location;
const pathname = baseUrl.pathname;
let path;

window.addEventListener("load", () => {
  init();
});

let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log(id);

function getUserById(id) {
  const endpoint = path + `api/api-get-single-user.php?id=` + id;
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((user) => {
        resolve(user);
      });
  });
}

function configurePath() {
  if (pathname.includes("/fakeid/lamp/")) {
    return "/fakeid/lamp/";
  } else {
    return "/";
  }
}

async function init() {
  path = configurePath();
  let user = await getUserById(id);
  console.log(user);
}
