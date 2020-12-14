
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
      async getAll(){
        let users =  await this.collection.find().toArray();
        users = users.map(user => {
            user.age = this.calculateAge(user.dateOfBirth)
            user.gender = this.getGenderValue(user.genderIdentification)
            user.maritalStatus? user.maritalStatus= this.getMaritalStatus(user.maritalStatus) : null
            return user
        })
        return users;
      }

      async findById(userId) {
       let user = await this.collection.findOne({ _id: new ObjectID(userId) });
       if(user){
           user.age = this.calculateAge(user.dateOfBirth)
           user.gender = this.getGenderValue(user.genderIdentification)
           user.maritalStatus? user.maritalStatus= this.getMaritalStatus(user.maritalStatus) : null
       }
       return user
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
       getMaritalStatus  (maritalStatusId) {
        maritalStatusId = parseInt(maritalStatusId)
        if(maritalStatusId === 1) return 'Single'
        if(maritalStatusId === 2) return 'Married'
        if(maritalStatusId === 3) return 'Divorced'
        if(maritalStatusId === 4) return 'Widow'
        if(maritalStatusId === 5) return 'Registered Partnership'
        if(maritalStatusId === 6) return 'Abolition of Registered Partnership'
        if(maritalStatusId === 7) return 'Deceased'
        if(maritalStatusId === 8) return 'Unknown'
        
      }

      async createUser(info){
          let { name, address,  genderIdentification, dateOfBirth, isEmployee} = info
          if(!name && !address && !genderIdentification && !dateOfBirth && !isEmployee){
              return { status:400, response:{error:  'missing fields' } }
            }
            if(!name || !address || !dateOfBirth || !genderIdentification){
                return { status:400, response: {error: 'missing fields' }}
            }
            if(genderIdentification !== '0001' && genderIdentification !== '0002'){
                return { status:400, response:{error: 'gender not available'} }
            }
            info.CPR = dateOfBirth+genderIdentification
            
            if(isEmployee === 'true'){
                let age = this.calculateAge(dateOfBirth)
                if(age < 18){
                    return { status:400, response:{error: 'User is to young to be an employee'} }
                }
                info.CVR = '12345678'
                info.companyName = 'EE A/S';
            }
            delete info.isEmployee;
            try{
                const result = await this.collection.insertOne({...info})
                return {status: 200, response: {message: 'user created' , userId: result.insertedId}}
                
            }catch(err){
                if(err)return {status:400, response: err};
            }
        
      }




      updateUser(user, info){
        let { name, address, maritalStatusId } = info;
        if(!name === undefined){
            name = user.name
        }
        if(address === undefined){
            address = user.address
        }
        if(maritalStatusId === undefined){
            maritalStatusId = user.maritalStatusId
        }
        let bulkUpdates = [{
            'updateOne':{
                'filter': {'_id': ObjectID(user._id)},
                'update': {$set :{ name: name, address: address, maritalStatusId: maritalStatusId }}
            } 
        }]
        return bulkUpdates;
      }

      updateSpouse(user, maritalStatusId, spouse){
       let bulkUpdates = []
        if(maritalStatusId == '2' || maritalStatusId == '5'){
            bulkUpdates.push({
                'updateOne': {
                    'filter':{'_id': ObjectID(user._id)},
                    'update': {'$push':{'spouse': spouse}}
                }
                })
            bulkUpdates.push({'updateOne': {
                    'filter':{'_id': ObjectID(spouse._id)},
                    'update': {'$push':{'spouse': user}, $set : {'maritalStatusId': maritalStatusId}}
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
                    'update': {'$pull':{'spouse': {'_id': user._id}}, $set : {'maritalStatusId': maritalStatusId}}
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