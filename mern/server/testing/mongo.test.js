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
    const { user1 } = await dbHelper.createSampleUsers();

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


 


