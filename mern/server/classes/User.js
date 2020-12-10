
const { ObjectID } = require('mongodb');

class User {

    constructor(db) {
        this.db = db;
        this.collectionName = "users";
        this.collection = db.collection(this.collectionName);
      }
    
      /**
       * Find a specific product document by ID
       * @param {ObjectID} userId
       */
      getAll(){
          return this.collection.find().toArray();
      }

      findById(userId) {
        return this.collection.findOne({ _id: new ObjectID(userId) });
      }
      
     formatDateOfBirth(dateOfBirth){
        return dateOfBirth.replace(/^(\d{2})(\d{2})/, '$1-$2-');
      }
      calculateAge(dateString){
        let dateOfBirth = this.formatDateOfBirth(dateString)
        let day  = new Date(dateOfBirth).getDate()
        let month = new Date(dateOfBirth).getMonth()
        let year = dateOfBirth.split('-')[2]
        if(parseInt(year)> 20){
            year = `19${year}`
         }else{
            year = `20${year}`
        }

        const today = new Date()
        let age = today.getFullYear() - year;
        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
           age--;
        }
       return age;
      }
    

      getGenderValue(genderValue){
          if(genderValue === '0001'){
              return 'male'
          }else{
              return 'female'
          }
      }






      updateUser(user, info){
        let { name, address, maritalStatus } = info;
        if(!name === undefined){
            name = user.name
        }
        if(address === undefined){
            address = user.address
        }
        if(maritalStatus === undefined){
            maritalStatus = user.maritalStatus
        }
        let bulkUpdates = [{
            'updateOne':{
                'filter': {'_id': ObjectID(user._id)},
                'update': {$set :{ name: name, address: address, maritalStatus: maritalStatus }}
            } 
        }]
        return bulkUpdates;
      }

      updateSpouse(user, maritalStatus, spouse){
       let bulkUpdates = []
        if(maritalStatus == 'married' || maritalStatus == 'registeredPartnership'){
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
            bulkUpdates.push({
                'updateOne': {
                    'filter':{'_id': ObjectID(user._id)},
                    'update': {'$pull':{'spouse': {'_id': ObjectID(spouse._id)}}}
                }
            })
            bulkUpdates.push({
                    'updateOne': {
                    'filter':{'_id': ObjectID(spouse._id)},
                    'update': {'$pull':{'spouse': {'_id': user._id}}, $set : {'maritalStatus': maritalStatus}}
                }
            })
        }      
        return bulkUpdates
      }



      updateChild(user, child){
        let bulkUpdates = []
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
        return bulkUpdates
      }

}

module.exports = User