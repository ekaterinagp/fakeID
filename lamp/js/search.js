window.addEventListener('load', init);

const filterForm = document.querySelector('.filters')
const sorterForm = document.querySelector('.sorters')
const filterContainer = document.querySelector('.filtersContainer');
const filterInputs = document.querySelectorAll('input[type=checkbox]');
const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');
let showHideFiltersBtn = document.querySelector('.filterBtn')
let usersInDom;
let users;

let filterConditions = {}
let sortParams = {}


 const sortUsers = () => {
   if(sortParams.sorter == 'sortAge'){
      usersInDom = usersInDom.sort((a,b) => {
         let aUserAge = calculateAge(a.date_of_birth)
         let bUserAge = calculateAge(b.date_of_birth)
         return aUserAge - bUserAge;
      })
   }
   if(sortParams.sorter == 'sortName'){
      usersInDom = usersInDom.sort((a,b) => {
         if(a.name < b.name){
            return -1
         }else {
            return 1
         }
      })
   }
   displayUsers(usersInDom);
 }


 const filterUsers = () => {
    let filteredUsers = users.filter(user => {
       let doesUserMatch = []

       for(let property in filterConditions){
         let key = property
         let value = filterConditions[property]

         doesUserMatch.push(checkIfUserMatch(key, value, user));
      }
      if(!doesUserMatch.includes(false) && doesUserMatch.includes(true)){
         return user;
      }
   })
   usersInDom = filteredUsers;
   displayUsers(filteredUsers);
 }

const checkIfUserMatch = (key, value, user)=> {
   let userAge = calculateAge(user.date_of_birth)

   if(userAge >= 18){
      userAge= 'adult';
   }else{
      userAge= 'child'
   }
   if(key == 'marital_status_id') value = parseInt(value);
   if(key == 'CVR' && value== 'null') value = null;
   if(key == 'age' ) user.age = userAge

   if(user[key] === value){
      return true
   }else {
      return false
   }
}


const showHideFilters = () => {
   let filterContainerHeight = filterContainer.clientHeight;
   if (filterContainerHeight > 0){
      filterContainer.style.maxHeight = 0;
      showHideFiltersBtn.textContent ='Show Filters'
   } else{
      showHideFiltersBtn.textContent ='Hide Filters'
      filterContainer.style.maxHeight = '100vh';
   }
}

const clearAllFilters = () => {
   displayUsers(users);
   usersInDom =  users.slice(0);
   for (let key in filterConditions ){
      uncheckInputs(key)
   }
   filterConditions = {}
}


const uncheckInputs= (inputName, input=null) => {
   document.querySelectorAll(`input[name=${inputName}`).forEach(inputBtn => {
      if(inputBtn !== input) inputBtn.checked = false
   })
}

const processFilterFormChange = (event) => {
   event.target.checked ? filterConditions[event.target.name] = event.target.value : delete filterConditions[event.target.name]
   uncheckInputs(event.target.name, event.target)
   if(!Object.keys(filterConditions).length){
      clearAllFilters();
   }else{
      filterUsers()
   }
}


async function init() {
   filterForm.addEventListener('change', (event) => {
      processFilterFormChange(event)
   })
   
   sorterForm.addEventListener('change', (event) => {
      event.target.checked ? sortParams[event.target.name] = event.target.value : delete sortParams[event.target.name]
      sortUsers()
   })
console.log(searchBtn)
   searchBtn.addEventListener('click',() => {
      let userMatches = users.filter(user => user.name.includes(searchInput.value))
      displayUsers(userMatches)
   })

   showHideFiltersBtn.addEventListener('click', showHideFilters)
   users = await getAllUsers();
   usersInDom = users.slice(0); //create copy of users to show on when filters are cleared
 }



