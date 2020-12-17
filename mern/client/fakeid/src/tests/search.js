let { users } = require('./sort')

const searchUsers = (searchString) => {
    searchString = searchString.toLowerCase()
    let result = users.filter(user => user.name.toLowerCase().includes(searchString))
    if(!result.length){
        return 'No users found'
    }
    return result;
}

module.exports = searchUsers 