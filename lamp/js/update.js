"use strict";

let formData = new FormData()
document.querySelector('form').addEventListener('change', (event)=> {
  let name = event.target.name;
  formData.append(event.target.name, event.target.value)
})


async function submitUpdateForm(id) {
  console.log(id);
  event.preventDefault();
  const response = await fetch(path + "api/users/" + id, {
    method: "POST",
    body: formData,
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  // if (data.status == 1) {
  //   window.location.href = path + "/";
  // }
}
