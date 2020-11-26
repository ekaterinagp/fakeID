"use strict"
const form = document.querySelector('.filtersContainer')
const usersContainer = document.querySelector('.container');

const displayFilteredUsers = (users) => {

}

const fetchFilteredUsers = async (event) => {
   let querystring = new FormData(form);
   querystring = new URLSearchParams(querystring).toString()
   const response = await fetch(path+'api/users?' +  querystring);
   const data = await response.json()
   displayFilteredUsers(data)
}




form.addEventListener('change', fetchFilteredUsers)
