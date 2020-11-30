window.addEventListener('load', init);

const filterForm = document.querySelector('.filters')
const sorterForm = document.querySelector('.sorters')
const filterContainer = document.querySelector('.filtersContainer');
let showHideFiltersBtn = document.querySelector('.filterBtn')
let usersInDom;
let users;

let filterConditions = {}
let user = {
   name : '',
   maritalStatus : '',
   gender : '',
   age: '',
   employeeStatus: '',
}


 const sortUsers = (formData, usersInDom) => {
    console.log(usersInDom)
   if(formData.get('sorter') == 'sortAge'){
      usersInDom = usersInDom.sort((a,b) => {
         let aUserAge = calculateAge(a.date_of_birth)
         let bUserAge = calculateAge(b.date_of_birth)
         return aUserAge - bUserAge;
      })
   }
   if(formData.get('sorter') == 'sortName'){
      usersInDom = usersInDom.sort((a,b) => {
         if(a.name < b.name){
            return -1
         }else {
            return 1
         }
      })
   }
   return usersInDom;
 }

 const filterUsers = (formData, users) => {
   // let formData = new FormData(filterForm);

   // formData = formatFormData(formData)
   let filteredUsers = users.filter(user => {
      let trueArray = []
      for(let property in formData){
         let key = property
         let value = formData[property]
         // console.log(key, value)
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
            trueArray.push(true)
         }else {
            trueArray.push(false)
         }
         
      }
   
      if(!trueArray.includes(false) && trueArray.includes(true)){
         return user;
      }
   })
   usersInDom = filteredUsers;
   return filteredUsers;
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


async function init() {
   filterForm.addEventListener('change', (event) => {
      filterConditions[event.target.name] = event.target.value
      let filteredUsers = filterUsers()
      displayUsers(filteredUsers)
   })
   sorterForm.addEventListener('change', () => {
      let sortedUsers = sortUsers(sorterFormData, usersInDom)
      displayUsers(sortedUsers)
   })


   showHideFiltersBtn.addEventListener('click', showHideFilters)
   users = await getAllUsers();
   usersInDom = users.slice(0);
 }

