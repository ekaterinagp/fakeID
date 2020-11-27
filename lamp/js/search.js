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
   

   let conditionArray =[]
   for(let property in formData){
      let key = property
      let value = formData[property]
      if(Array.isArray(value)){
         let multipleOfSame = []
            value.forEach(val => {
                if(key == 'CVR'){
                  let string;
                  val== 'null' ? string = null : string = val
                  multipleOfSame.push(`user.CVR == ${string}`)
               }else if (key == 'age'){
                  let string;
                  val =='child'? string  = 'Child' : string = 'Adult';
                  multipleOfSame.push(`userAge  == "${string}"`)
               }else{
                  multipleOfSame.push(`user.${key} == ${val}`)
               }
            })
            conditionArray.push(`(${multipleOfSame.join(' || ')})`)
         }
      else if(key == 'gender_value'){
         conditionArray.push(`user.gender_value == ${value}`)
      }else if(key == 'CVR'){
         let string;
         value == 'null' ? string = null : string = value
         conditionArray.push(`user.CVR == ${string}`)
      }else if (key == 'age'){
         let string;
         value =='child'? string = 'Child' : string = 'Adult';
         conditionArray.push(`userAge == "${string}"`)
      }else{
         conditionArray.push(`user.marital_status == ${value}`)
      }
   }
   let conditionString= conditionArray.join(' && ')
   let filteredUsers = users.filter(user=> {
      let userAge = calculateAge(user.date_of_birth)
      console.log(conditionString)
      if(eval(conditionString)){
         return user;
      }
   })

   console.log(filteredUsers)


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