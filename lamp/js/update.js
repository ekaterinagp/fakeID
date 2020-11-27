"use strict";

async function submitUpdateForm(id) {
  console.log(id);
  event.preventDefault();
  const formData = new FormData(document.querySelector("form"));
  const response = await fetch(path + "api/users/" + id, {
    method: "PUT",
    body: formData,
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  // if (data.status == 1) {
  //   window.location.href = path + "/";
  // }
}
