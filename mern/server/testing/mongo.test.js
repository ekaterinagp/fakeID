const TestDbHelper = require("./helper");
const User = require("./../classes/User");

const dbHelper = new TestDbHelper();

beforeAll(async () => {
  await dbHelper.start();
});

afterAll(async () => {
  await dbHelper.stop();
});

let user;
beforeEach(async () => {
  user = new User(dbHelper.db);
});

afterEach(async () => {
  await dbHelper.cleanup();
});


describe("findById", () => {
  test("should return the correct document by ID", async () => {
    // 1. Insert the desired documents and collections into the database
    const { user1 } = await createSampleUsers();

    // 2. Call the method under test with the parameters needed for the desired outcome
    const result = await user.findById(user1._id);

    // 3. Make assertions on the result
    expect(result).toMatchObject(user1);
  });

  test("should return null if a document with the provided ID could not be found", async () => {
    const result = await user.findById("123456789123");
    expect(result).toBeNull();
  });
});



describe('User methods', () => {
  
  test('should return user collection', async  () => {
    let users = await createSampleUsers()
    const result = await user.getAll()
    expect(result[0]).toMatchObject(users.user1)
    expect(result[1]).toMatchObject(users.user2)
    expect(result[2]).toMatchObject(users.user3)
  })
  
  
  test('test calculate age', async () => {
    let users = await createSampleUsers()
      expect(user.calculateAge(users.user1.dateOfBirth)).toEqual(19);
  })

  test('test if correct gender is returned', async () => {
    let {user1, user2, user3} = await createSampleUsers()
    expect(user.getGenderValue(user1.genderIdentification)).toEqual('male')
    expect(user.getGenderValue(user2.genderIdentification)).toEqual('male')
    expect(user.getGenderValue(user3.genderIdentification)).toEqual('female')
  })


})




async function createSampleUsers() {
  const user1 = await dbHelper.createDoc(user.collectionName, {
    name: "First user",
    dateOfBirth: "01-01-01",
    address: 'Lygten 1',
    companyNamy: 329.99,
    CPR: '0101010001',
    maritalStatus: 'unknown',
    genderIdentification:'0001'
  });
  const user2 = await dbHelper.createDoc(user.collectionName, {
    name: "Second user",
    dateOfBirth: "02-02-80",
    CVR: "12345678",
    address: 'Lygten 3',
    companyNamy: 'EG',
    CPR: '0202800002',
    genderIdentification:'0001'
  });
  const user3 = await dbHelper.createDoc(user.collectionName, {
    name: "Third user",
    dateOfBirth: "10-12-45",
    address: 'Lygten',
    CPR:'1012450002' ,
    maritalStatus : 'married',
    spouse : {_id :123456, name:'some guy'},
    genderIdentification:'0002'
  });

  return { user1, user2, user3 };
}