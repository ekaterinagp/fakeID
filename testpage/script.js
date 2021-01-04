"use strict"

window.addEventListener('load', init)

const baseUrl = window.location;
const pathname = baseUrl.pathname;
let path = configurePath()

async function configureParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('lamp')){
        console.log('lamp')
        const user = await getLampUser(urlParams.get('lamp'))
        displayUser(user[0])
    
    }else if(urlParams.has('mern') || urlParams.has('mean')){
        console.log('mern')
    
    }else if(urlParams.has('mean')){
        console.log('mean')
    
    }else{
        console.log('wrong/no params')
    }
}

async function getLampUser(id){
    let endpoint = path + "api/users/" +id;
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((user) => {
          resolve(user);
          console.log(user);
        });
    });
}



async function getMernUser(id){
    console.log(id)
}
async function getMeanUser(id){
    console.log(id)
}

async function displayUser(user) {
    console.log(user.name)
    document.querySelector('h1').textContent = user.name
    document.querySelector('.userType').textContent = user.CVR ? 'Employee': ''
    document.querySelector('.address').textContent =  `${user.street_building_name} ${user.street_name}`
    document.querySelector('.gender').textContent = user.gender_value === '0001' ? 'Male' : 'Female'
    document.querySelector('.maritalStatus').textContent = getMaritalStatus(user.marital_status_id)
    if(user.spouse_id){
        const spouse = await getLampUser(spouse_id)
        
    }
}

function getMaritalStatus(status){
    status = parseInt(status);
    if (status === 1) return "Single";
    if (status === 2) return "Married";
    if (status === 3) return "Divorced";
    if (status === 4) return "Widow";
    if (status === 5) return "Registered Partnership";
    if (status === 6) return "Abolition of Registered Partnership";
    if (status === 7) return "Deceased";
    return "Unknown";
}
function configurePath() {
    if (pathname.includes("/fakeid/testpage/")) {
      return "/fakeid/lamp/";
    } else {
      return "https://fakeid-lamp.herokuapp.com/";
    }
  }

function init () {
 configureParams()
}


