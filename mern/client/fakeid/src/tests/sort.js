let users = [
       {
        _id:1,
        name: 'Lisa',
        age: 34
    },
    {
        _id:2,
        name: 'Anna',
        age: 55
    },
    {
        _id:3,
        name: 'Arthur',
        age: 5
    },
    {
        _id:4,
        name: 'Valerie',
        age: 15
    },
    {
        _id:5,
        name: 'Friðrik',
        age: 75
    },
    {
        _id:6,
        name: 'Steven',
        age: 10
    },
]

const sortUsers = (type) => {
    let sortedUsers
    if (type === 'sortName'){
        sortedUsers = users.sort((a,b) => {
            if(a.name < b.name){
                return -1
            }else{
                return 1
            }
        })
    }
    if(type === 'sortAge'){
        sortedUsers = users.sort((a,b) => {
           return a.age - b.age
        })
    }
    return sortedUsers
}


module.exports = {sortUsers, users}