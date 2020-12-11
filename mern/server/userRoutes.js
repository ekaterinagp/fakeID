const router = require('express').Router();
const User = require('./classes/User')


const {  ObjectID } = require('mongodb')


router.get('/users', async (req, res) => {
    let userEntity = new User(db)
    try{
        const users = await userEntity.getAll()
        users = users.map(user => {
            user.age = this.calculateAge(user.dateOfBirth)
            user.gender = this.getGenderValue(user.genderIdentification)
            user.maritalStatusId? user.maritalStatus= this.getMaritalStatus(user.maritalStatusId) : null
            return user
        })
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
        singleUser.age = this.calculateAge(singleUser.dateOfBirth)
        singleUser.gender = this.getGenderValue(singleUser.genderIdentification)
        singleUser.maritalStatus? singleUser.maritalStatus= this.getMaritalStatus(singleUser.maritalStatus) : null
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

router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send({error: 'id missing'})
    }
    let userEntity = new User(db);
    user = await userEntity.findById(id);
    let bulkUpdates = [];

    let { name, address, maritalStatus ,spouseId, childId } = req.body;
    if(  !name && !address && !maritalStatus && !spouseId && !childId){
        return res.status(400).send({error:'missing fields'})
    }
 
    if(spouseId){
        let spouse = await userEntity.findById(spouseId)
        if(!spouse){
            return res.status(400).send({error: 'User does not exist'})
        }
        if(maritalStatus == 2 || maritalStatus == 5){
            if(user.spouse && user.spouse.length >0) return res.send({message: 'user already has a spouse'})
        }
        delete spouse.spouse

       bulkUpdates.push(...userEntity.updateSpouse(user, maritalStatus, spouse))
    }

    if(childId){
        let child = await userEntity.findById(childId)
        if(!child){
            return res.status(400).send({error: 'User does not exist'})
        }
        if(userEntity.calculateAge(child.dateOfBirth)>=18){
            return res.status(400).send({error: 'To add a child it must be under 18'})
        }
        delete child.parents
        bulkUpdates.push(...userEntity.updateChild(user, child))
    } 

    bulkUpdates.push(...userEntity.updateUser(user, req.body))
    try{
       const response = await userCollection.bulkWrite(bulkUpdates, {"ordered": true})
       return res.status(200).send({response})
    }catch(err){
        if(err){console.log(err); return res.status(500).send({error: err}); }
    }
})

module.exports = router;

