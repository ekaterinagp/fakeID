"use strict";


window.addEventListener("load", () => {
  init();
});

let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
// console.log(id);




async function init() {
  let user = await getUserById(id);
  // console.log(user);
}
