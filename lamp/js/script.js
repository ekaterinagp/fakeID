"use strict";
const baseUrl = window.location;
const pathname = baseUrl.pathname;
const usersContainer = document.querySelector('.container');
let path = configurePath();


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
        displayUsers(users)
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



const displayUsers = (users) => {
  usersContainer.innerHTML = '';
  users.forEach(user => {
    let singleUser =  document.createElement('div');
     singleUser.className = 'singleUser';
     singleUser.id = user.id;
     let link = document.createElement('a');
     link.href = 'user.php?id=' +user.id;
     let name = document.createElement('p');
     name.textContent = user.name;
     let age = document.createElement('p');
     let userAge = calculateAge(user.date_of_birth)
     if(userAge >= 18){
        userAge= 'adult';
     }else{
        userAge= 'child'
     }
     age.textContent = userAge;
     let gender = document.createElement('p');
     user.gender_value == '0001' ? gender.textContent = 'Male' : gender.textContent = 'Female';
     let CVR = document.createElement('p');
     user.CVR? CVR.textContent = user.CVR : CVR.textContent = ''
     let maritalStatus = document.createElement('p');
     maritalStatus.textContent = getMaritalStatus(user.marital_status_id);
     let button = document.createElement('button');
     button.className = 'loginBtn';
     button.textContent = 'Log in';

     link.append(name);
     singleUser.append(link, age, gender, CVR,  maritalStatus, button)
     usersContainer.append(singleUser)
  })
}


const getMaritalStatus = (statusID) =>{
  statusID = parseInt(statusID);
  switch (statusID){
     case 1:
        return 'Single';
     case 2:
        return 'Married';
     case 3:
        return 'Divorced';
     case 4:
        return 'Widow';
     case 5:
        return 'Registered Partnership';
     case 6:
        return 'Abolition of Registered Partnership';
     case 7:
        return 'Deceased';
     case 8:
        return 'Unknown';
     default:
        return ''
  }
}


const calculateAge = (dateOFBirth) => {
  let formattedDateOfBirth = dateOFBirth.split('')
  let day = formattedDateOfBirth[0].toString()+formattedDateOfBirth[1].toString();
  let month = formattedDateOfBirth[2].toString()+formattedDateOfBirth[3].toString();
  let year = formattedDateOfBirth[4].toString()+formattedDateOfBirth[5].toString();
   if(parseInt(year)> 20){
     year = `19${year}`
  }else{
     year = `20${year}`
  }
  let today = new Date()
  let age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
     age--;
  }
 return age;
}





async function init() {
  const users = await getAllUsers();
  console.log(users);
}