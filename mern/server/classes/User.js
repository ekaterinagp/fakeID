const { ObjectId } = require('mongodb')

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
        return this.collection.findOne({ _id: new ObjectId(userId) });
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
}

module.exports = User