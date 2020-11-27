"use strict"
window.addEventListener('load', init);

const filterForm = document.querySelector('.filtersContainer')
const usersContainer = document.querySelector('.container');
let showHideFiltersBtn = document.querySelector('.filterBtn')

let users;

const displayFilteredUsers = (users) => {
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
      age.textContent = calculateAge(user.date_of_birth);
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
   return statusID;
}

// const fetchFilteredUsers = async (event) => {
//    let querystring = new FormData(form);
//    querystring = new URLSearchParams(querystring).toString()
//    const response = await fetch(path+'api/users?' +  querystring);
//    const data = await response.json()
//    displayFilteredUsers(data)
// }

const updateSearch = () => {
   let formData = new FormData(filterForm)
   let data = [...formData]
   let filteredUsers =[];
   if(data.length == 0){
      filteredUsers = users;
   }
   data.map(param => {
      let newUsers;
      if(filteredUsers.length !== 0){
         users = filteredUsers;
         console.log(users)
      }
      if(param[0] === 'CVR' && param[1] == 'null'){
         newUsers = users.filter(user => user[param[0]] == null)
      }else if(param[0]=== 'age'){
         newUsers = users.filter(user => {
            let userAge = calculateAge(user.date_of_birth);
            if(param[1] == 'child' && userAge == 'Child'){
               return user
            }
            if(param[1] == 'adult' && userAge == 'Adult'){
               return user;
            }
         })
         
      }else{
         newUsers = users.filter(user => user[param[0]] == param[1])
      }
      filteredUsers.push(...newUsers);
   })
   filteredUsers = filteredUsers.filter(function(user, pos) {
      return filteredUsers.indexOf(user) == pos;
  })
   displayFilteredUsers(filteredUsers)
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
   if(age >= 18){
      return 'Adult';
   }
   return 'Child'
}

const showHideFilters = () => {
   let filterFormHeight = filterForm.clientHeight;
   if (filterFormHeight > 0){
      filterForm.style.maxHeight = 0;
      showHideFiltersBtn.textContent ='Show Filters'
   } else{
      showHideFiltersBtn.textContent ='Hide Filters'
      filterForm.style.maxHeight = '100vh';
   }
}


async function init() {
   filterForm.addEventListener('change', updateSearch)
   users = await getAllUsers();
   showHideFiltersBtn.addEventListener('click', showHideFilters)
 }