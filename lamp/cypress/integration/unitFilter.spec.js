
import {calculateAge, formatFormData, filterUsers, sortUsers} from './../../js/search';

describe('Unit Test Application Code', function () {
  let formData = new FormData();
  let sorterForm = new FormData();
  formData.append('marital_status', 1)
  formData.append('marital_status', 3)
  formData.append('gender_value', '0001')
  formData.append('CVR', 'null')
  sorterForm.append('sorter', 'sortAge')

let usersInDom = [
    {
        id: 1,
        CVR: null,
        address_id: 2,
        date_of_birth: "081290",
        gender_value: "0002",
        marital_status_id: 1,
        name: "Lisa Lalalaa"},
    {
        id: 2,
        CVR: null,
        address_id: 2,
        date_of_birth: "081215",
        gender_value: "0001",
        marital_status_id: 8,
        name: "name child"
},
    {
        id:3,
        CVR: '12345678',
        address_id: 2,
        date_of_birth: "081255",
        gender_value: "0001",
        marital_status_id: null,
        name: "name emplpyee"
    },
]


//   let shouldEqual = {
//     marital_status: [1, 3],
//     gender_value: '0001',
//     CVR: 'null'
// }
    before(() => {
      // check if the import worked correctly
      expect(calculateAge, 'calculateAGe').to.be.a('function')
    })
  
    context('search.js', function () {
      it('can calculate age', function () {
        expect(calculateAge('010101')).to.eq(19)
      })

      it('can format formdata', function () {
        expect(formatFormData(formData)).to.have.all.keys('marital_status', 'gender_value', 'CVR')
      })

      it('can sort based on age', function () {
        expect(sortUsers(sorterForm, usersInDom)[0].id).to.eq(2)
      })

      it('can filter based on varied params', function () {
        expect(filterUsers(formData, usersInDom)[0]).to.have.property('id', 2)
      })
      
    })
})
    
    
    /*
test calculate age
test format formdata
test filter data based on parameters

 */


