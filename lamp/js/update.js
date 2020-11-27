"use strict";

/* so what I meant is do it like this:
let formData = new FormData()
form.addeventlistender('change', ()=> {
  formData.append(event.target.name, event.target.value)
})

and then on submit it will only send the changed values instead of all the values who are automatically filled out in the html.
I hope this is clear hehehe
*/

async function submitUpdateForm(id) {
  console.log(id);
  event.preventDefault();
  const formData = new FormData(document.querySelector("form"));
  let querystring = new URLSearchParams(formData).toString() // this line is needed so tha backend understands the data, it transforms the formdata like this name=lisa&address_id=2 forexample
  console.log(querystring)
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
