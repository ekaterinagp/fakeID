"use strict";

async function submitCreateForm(event) {
  event.preventDefault();
  const formData = new FormData(document.querySelector("form"));
  let response = await fetch(path + "api/users", {
    method: "POST",
    body: formData,
  });
  console.log(response);
  response = await response.json();
  if(response.status){
    createNotification('success', 'User created')
    setTimeout(() => {
      window.location.href = path;
    
    }, 3000)
  }else{
    createNotification('error', response.message)
  }
  
}
