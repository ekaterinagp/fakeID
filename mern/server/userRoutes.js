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
        if(!spouse){
            return res.status(400).send({error: 'User does not exist'})
        }
        delete spouse.spouse

        if(maritalStatus == 'married' || maritalStatus == 'registeredPartnership'){
            if(user.spouse.length >0) return res.send({message: 'user already has a spouse'})
            bulkUpdates.push({
                'updateOne': {
                    'filter':{'_id': ObjectID(user._id)},
                    'update': {'$push':{'spouse': spouse}}
                }
                })
            bulkUpdates.push({'updateOne': {
                    'filter':{'_id': ObjectID(spouse._id)},
                    'update': {'$push':{'spouse': user}, $set : {'maritalStatus': maritalStatus}}
                }
            })

        }else{
            console.log(user._id, spouseId)
            bulkUpdates.push({
                'updateOne': {
                    'filter':{'_id': ObjectID(user._id)},
                    'update': {'$pull':{'spouse': {'_id': ObjectID(spouseId)}}}
                }
            })
            bulkUpdates.push({
                    'updateOne': {
                    'filter':{'_id': ObjectID(spouse._id)},
                    'update': {'$pull':{'spouse': {'_id': user._id}}, $set : {'maritalStatus': maritalStatus}}
                }
            })
        }      
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
        bulkUpdates.push({
            'updateOne': {
                'filter':{'_id': ObjectID(user._id)},
                'update': {'$push':{'children': child}}
            }
        })
        bulkUpdates.push({
            'updateOne': {
                'filter':{'_id': ObjectID(child._id)},
                'update': {'$push':{'parents': user}}
            }
        })
    } 

    bulkUpdates.push({
            'updateOne':{
                'filter': {'_id': ObjectID(user._id)},
                'update': {$set :{ name: name, address: address, maritalStatus: maritalStatus }}
            } 
        })

    try{
       const response = await userCollection.bulkWrite(bulkUpdates, {"ordered": true})
       return res.status(200).send({response})
    }catch(err){
        if(err){console.log(err); return res.status(500).send({error: err}); }
    }
})

module.exports = router;

