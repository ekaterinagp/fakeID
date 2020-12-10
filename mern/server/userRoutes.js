const router = require('express').Router();
const User = require('./classes/User')
const { ObjectID, ObjectId } = require('mongodb');


router.get('/users', async (req, res) => {
    let user = new User(db)
    try{
        const users = await user.getAll()
        return res.status(200).send(users)

    }catch(error){
        if(error){console.log(error); return res.status(500). send({error:error});}
    }
})

router.get('/users/:id', async (req, res) => {
    let user = new User(db)
    let { id } = req.params
    try{
        const singleUser = await user.findById(id)
        if(!singleUser){
            return res.status(400).send({error: 'wrong ID'})
        }
        return res.status(200).send({singleUser})
    }catch(err){
        if(err){console.log(error); return res.status(500).send({error}); }
    }
})



router.post('/users', async (req, res) => {
    let userEntity = new User(db)
    let {response, status} = await userEntity.createUser(req.body)
    return res.status(status).send(response)
})


module.exports = router;

