"use strict";

async function submitCreateForm(event) {
  event.preventDefault();
  let date = document
    .querySelector("form")
    .querySelector('input[name="date_of_birth"]').value;
  let newDate = new Date(date);
  // console.log(date);
  // console.log(newDate);
  var dd = String(newDate.getDate()).padStart(2, "0");
  var mm = String(newDate.getMonth() + 1).padStart(2, "0");
  var yy = newDate.getFullYear().toString().substr(2, 2);

  newDate = dd + mm + yy;
  newDate.toString();

  const formData = new FormData(document.querySelector("form"));

  formData.set('date_of_birth', newDate)

  let response = await fetch(path + "api/users", {
    method: "POST",
    body: formData,
  });
  console.log(response);

  response = await response.json();
  if (response.status) {
    createNotification("success", "User created");
    setTimeout(() => {
      window.location.href = path;
    }, 3000);
  } else {
    createNotification("error", response.message);
  }
}

// function changeformat() {
//   document.querySelector('input[name="date_of_birth"]').value.replace(/-/g, "");
//   console.log(document.querySelector('input[name="date_of_birth"]').value);
// }

// document
//   .querySelector('input[name="date_of_birth"]')
//   .addEventListener("mouseOut", () => {
//     changeformat();
//   });
