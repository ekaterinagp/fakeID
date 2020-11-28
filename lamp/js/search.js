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


 const formatFormData = () =>{
    let formData = new FormData(filterForm);
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


const updateSearch = () => {
   let formData = formatFormData()
   let data = [...new FormData(filterForm)]
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
                  user.age = userAge
               } 
               user[key] == val ? arrayValConditionArr.push(true): arrayValConditionArr.push(false)
            })
            if(arrayValConditionArr.includes(true)){
               trueArray.push(true)
            }
         }else{
            let userAge = calculateAge(user.date_of_birth)
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
      return 'adult';
   }
   return 'child'
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