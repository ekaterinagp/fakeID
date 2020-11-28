window.addEventListener('load', init);

const filterForm = document.querySelector('.filters')
const sorterForm = document.querySelector('.sorters')
const filterContainer = document.querySelector('.filtersContainer');
const usersContainer = document.querySelector('.container');
let showHideFiltersBtn = document.querySelector('.filterBtn')
let formData;
let usersInDom;
let users;

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
   return statusID;
}


 const formatFormData = (formData) =>{
    var object = {};
    formData.forEach((value, key) => {
        if(!Reflect.has(object, key)){
            object[key] = value;
            return;
        }
        if(!Array.isArray(object[key])){
            object[key] = [object[key]];    
        }
        object[key].push(value);
    });
 return object;
 }

 const sortUsers = () => {
    console.log(usersInDom)
    let formData = new FormData(sorterForm)
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
   displayUsers(usersInDom)

 }

 const filterUsers = () => {
   let formData = new FormData(filterForm);

   formData = formatFormData(formData)
   let filteredUsers = users.filter(user => {
      let trueArray = []
      for(let property in formData){
         let key = property
         let value = formData[property]
         // console.log(key, value)
         if(Array.isArray(value)){ //not working
         let  arrayValConditionArr =[]
            value.forEach(val => {
               if(key == 'CVR' && val== 'null') val = null;
               if(key == 'age' ){
                  let userAge = calculateAge(user.date_of_birth)
                  if(userAge >= 18){
                     userAge= 'adult';
                  }else {
                     userAge= 'child'
                  }
                  user.age = userAge
               } 
               user[key] == val ? arrayValConditionArr.push(true): arrayValConditionArr.push(false)
            })
            if(arrayValConditionArr.includes(true)){
               trueArray.push(true)
            }
         }else{
            let userAge = calculateAge(user.date_of_birth)
            if(userAge >= 18){
               userAge= 'adult';
            }else{
               userAge= 'child'
            }
            if(key == 'CVR' && value== 'null') value = null;
            if(key == 'age' ) user.age = userAge
            if(user[key] == value){
               trueArray.push(true)
            }else {
               trueArray.push(false)
            }
         }
      }
      // console.log(trueArray )
   
      if(!trueArray.includes(false)){
         return user;
      }
   })
   console.log(filteredUsers)
   displayUsers(filteredUsers)
   usersInDom = filteredUsers;
 }

const updateSearch = () => {
   let data = [...formData]
   if(data.length == 0) displayUsers(users)
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
   filterForm.addEventListener('change', filterUsers)
   sorterForm.addEventListener('change', sortUsers)
   showHideFiltersBtn.addEventListener('click', showHideFilters)
   users = await getAllUsers();
   usersInDom = users.slice(0);
 }