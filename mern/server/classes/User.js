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
        return this.collection.findOne({ _id: userId });
      }
      
      calculateAge(dateOfBirth){
        let dateOfBirthArray = dateOfBirth.split('')
        let day  = dateOfBirthArray[0].toString()+  dateOfBirthArray[1].toString()
        let month = dateOfBirthArray[2].toString()+dateOfBirthArray[3].toString()
        let year = dateOfBirthArray[4].toString()+ dateOfBirthArray[5].toString()
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