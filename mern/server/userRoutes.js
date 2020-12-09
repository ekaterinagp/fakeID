const router = require('express').Router();
const User = require('./classes/User')

const { ObjectId, ObjectID } = require('mongodb')


router.get('/users', async (req, res) => {
    let user = new User(db);
    const users = await user.getAll();
    return res.send(users);
})



router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    let userEntity = new User(db);
    let bulkUpdates = [];
    user = await userEntity.findById(id);

    if(!id) {
        return res.status(400).send({error: 'id missing'})
    }
    let { name, address, maritalStatus ,spouseId, childId } = req.body;
    console.log(name, user._id)
    if(  !name && !address && !maritalStatus && !spouseId && !childId){
        return res.status(400).send({error:'missing fields'})
    }
    if(!name === undefined){
        name = user.name
    }
    if(address === undefined){
        address = user.address
    }
    if(maritalStatus === undefined){
        maritalStatus = user.maritalStatus
    }
    if(spouseId){
        let spouse = await userEntity.findById(spouseId)
        delete spouse.spouse
        bulkUpdates.push({
            'updateOne': {
                'filter':{'_id': ObjectID(user._id)},
                'update': {'$push':{'spouse': spouse}}
            }
        })
        bulkUpdates.push({
            'updateOne': {
                'filter':{'_id': ObjectID(spouse._id)},
                'update': {'$push':{'spouse': user}, $set : {'maritalStatus': maritalStatus}}
            }
        })
    }

    if(childId){
        return res.send({message: 'add child'})
    }
 

    bulkUpdates.push({
            'updateOne':{
                'filter': {'_id': ObjectID(user._id)},
                'update': {$set :{ name: name, address: address, maritalStatus: maritalStatus }}
            } 
        })
    try{
       const response = await userCollection.bulkWrite(bulkUpdates, {"ordered": true})//, (err, result) => {
            // if(err){console.log(err); return res.status(500).send({error:err});}
            return res.status(200).send({response})
        // })
    }catch(err){
        if(err){console.log(err); return res.status(500).send({error: 'something went wrong'}); }
    }
    

})

module.exports = router;

