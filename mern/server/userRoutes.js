const router = require('express').Router();
const User = require('./classes/User')

router.get('/users', async (req, res) => {
    let user = new User(db)
    const users = await user.getAll()
    return res.send(users)
})


module.exports = router;

