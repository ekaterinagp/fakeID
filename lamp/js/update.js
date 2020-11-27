"use strict";

async function submitUpdateForm(id) {
  console.log(id);
  event.preventDefault();
  const formData = new FormData(document.querySelector("form"));
  let querystring = new URLSearchParams(formData).toString()
  const response = await fetch(path + "api/users/" + id, {
    method: "PATCH",
    body: querystring,
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  // if (data.status == 1) {
  //   window.location.href = path + "/";
  // }
}
