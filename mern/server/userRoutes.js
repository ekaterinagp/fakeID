const router = require('express').Router();
const User = require('./classes/User')

const {  ObjectID } = require('mongodb')


router.get('/users', async (req, res) => {
    let user = new User(db);
    const users = await user.getAll();
    return res.send(users);
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
        if(maritalStatus == 'married' || maritalStatus == 'registeredPartnership'){
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

