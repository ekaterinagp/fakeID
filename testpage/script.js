"use strict"

window.addEventListener('load', init)

const baseUrl = window.location;
const pathname = baseUrl.pathname;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let path = configurePath()

async function configureParams(){
    console.log(document.referrer)
    if(document.referrer !== 'http://localhost/fakeid/lamp/'
     && document.referrer !== 'https://fakeid-lamp.herokuapp.com/'
     && document.referrer !== 'http://localhost:4200/'
     && document.referrer !== 'https://fakeid-mean.herokuapp.com/'
     && document.referrer !== 'http://localhost:3000/'
     && document.referrer !== 'https://fakeid-mern.herokuapp.com/'
     ){
        displayError()
        return
    }
    if(urlParams.has('lamp') ){
        let id = urlParams.get('lamp')
        const user = await getUser(id)
        displayUser(user[0])
        
    }else if(urlParams.has('mern') || urlParams.has('mean')){
        let id = urlParams.get('mean') || urlParams.get('mern')
        const user = await getUser(id)
        displayUser(user.singleUser)
    }else{
        console.log('wrong/no params')
        displayError()
    }
}

async function getUser(id){
    let endpoint = path + "/users/" +id ;
    return new Promise((resolve, reject) => {
        fetch(endpoint)
        .then((res) => res.json())
        .then((user) => {
            resolve(user);
            console.log(user);
        });
    });
}

async function getFamilyRelation(userAge, id){
    let endpoint;
    if (userAge >= 18){
        endpoint = path + "/users/" +id +'/children';
    }else{
        endpoint = path + "/users/" +id +'/parents';
    }
        return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((users) => {
          resolve(users);
          console.log(users);
        });
    });
}

async function displayUser(user) {
    user = convertToCamel(user)
    let userAge = calculateAge(user.dateOfBirth)
    if(urlParams.has('lamp')){
        let relation = await getFamilyRelation(userAge, user.id)
        if(userAge >= 18){
            user.children = relation
        }else{
            user.parents = relation
        }
    }
    console.log(user)
    // console.log(user.name)
    document.querySelector('h1').textContent = user.name
    document.querySelector('.userType').textContent = user.CVR ? 'Employee': ''
    document.querySelector('.dateOfBirth').textContent = user.dateOfBirth.replace(
        /^(\d{2})(\d{2})/,
        "$1-$2-"
      );
    document.querySelector('.address').textContent =  user.streetBuildingName? `${user.streetName} ${user.streetBuildingName}, ${user.postCode} ${user.district}`: user.address
    document.querySelector('.gender').textContent = user.genderValue? getGender(user.genderValue) : user.gender
    if(!user.CVR){
        document.querySelector('.maritalStatus p').textContent = getMaritalStatus(user.maritalStatusId)
        if(user.spouseId || user.spouse){
            if(user.spouseId){
                const spouse = await getUser(user.spouseId)
                document.querySelector('.spouse p').textContent = spouse[0].name
            }else{
                document.querySelector('.spouse p').textContent = user.spouse.name
            }
        }
        if(user.children){
            user.children.map(child => {
                let childName = document.createElement('p')
                childName.textContent = child.name
                document.querySelector('.childrenWrapper').append(childName)
                document.querySelector('.parents').style.display = 'none'
            })
        }
        if(user.parents){
            user.parents.map(parent => {
                let parentName = document.createElement('p')
                parentName.textContent = parent.name
                document.querySelector('.parentsWrapper').append(parentName)
                document.querySelector('.children').style.display = 'none'
                document.querySelector('.spouse').style.display = 'none'
            })
        }
        document.querySelector('.employee').style.display = 'none'
    }else{
        document.querySelector('.notEmployee').style.display = 'none'
        document.querySelector('.cvr').textContent = user.CVR
        document.querySelector('.companyName').textContent = user.companyName
    }
}


const calculateAge = (dateOFBirth) => {
    let formattedDateOfBirth = dateOFBirth.split("");
    let day =
      formattedDateOfBirth[0].toString() + formattedDateOfBirth[1].toString();
    let month =
      formattedDateOfBirth[2].toString() + formattedDateOfBirth[3].toString();
    let year =
      formattedDateOfBirth[4].toString() + formattedDateOfBirth[5].toString();
    if (parseInt(year) > 20) {
      year = `19${year}`;
    } else {
      year = `20${year}`;
    }
    let today = new Date();
    let age = today.getFullYear() - year;
    if (
      today.getMonth() < month ||
      (today.getMonth() == month && today.getDate() < day)
    ) {
      age--;
    }
    return age;
  };


function getGender(genderValue) {
    if(genderValue === '0001') return 'Male'
    if(genderValue === '0002') return 'Female'
}
function convertToCamel(user) {
    const tempUser = {};

    Object.keys(user)
    .forEach((key) => {
        tempUser[toCamel(key)] = user[key];
    });

    return tempUser;
}
const toCamel = (string) => {
    return string.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  };

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
    console.log(urlParams)
    if (pathname.includes("/fakeid/testpage/")) {
        if(urlParams.has('lamp')){
            return "/fakeid/lamp/api";
        }else{
            return "http://localhost:9090"
        }
    } else {
        if(urlParams.has('lamp')){
            return  "https://fakeid-lamp.herokuapp.com/api";
        }else{
            return "https://fakeid-mern.herokuapp.com";
        }
    }
  }

function displayError(){
    let body = document.querySelector('body')
    let error = document.createElement('h1')
    error.className = 'error'
    error.textContent = 'You do not have access to view this page'
    error.style.color = 'red';
    body.append(error)
}

function init () {
    configureParams()
}



