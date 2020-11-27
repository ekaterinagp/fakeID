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

const calculateAge = (birthday) => {
   return birthday;
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
   data.map(param => {
      if(param[0] === 'CVR' && param[1] == 'null'){
         let newUsers = users.filter(user => user[param[0]] == null)
         filteredUsers.push(...newUsers);
      }else{
         let newUsers = users.filter(user => user[param[0]] == param[1])
         filteredUsers.push(...newUsers);
      }
   })
   displayFilteredUsers(filteredUsers)
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