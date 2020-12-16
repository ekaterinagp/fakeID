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

describe("User methods", () => {
  test("should return user collection", async () => {
    let users = await createSampleUsers();
    const result = await user.getAll();
    expect(result[0]).toMatchObject(users.user1);
    expect(result[1]).toMatchObject(users.user2);
    expect(result[2]).toMatchObject(users.user3);
  });

  test("test calculate age", async () => {
    let users = await createSampleUsers();
    expect(users.user1.dateOfBirth).toEqual("010101");
  });
  test("test calculate age", async () => {
    let users = await createSampleUsers();
    expect(user.calculateAge(users.user1.dateOfBirth)).toEqual(19);
  });
  test("test calculate age", async () => {
    let users = await createSampleUsers();
    expect(user.calculateAge(users.user5.dateOfBirth)).toEqual(34);
  });

  test("test calculate age", async () => {
    let users = await createSampleUsers();
    expect(user.calculateAge(users.user6.dateOfBirth)).toEqual(74);
  });

  test("test if correct gender is returned", async () => {
    let { user1, user2, user3 } = await createSampleUsers();
    expect(user.getGenderValue(user1.genderIdentification)).toEqual("male");
    expect(user.getGenderValue(user2.genderIdentification)).toEqual("male");
    expect(user.getGenderValue(user3.genderIdentification)).toEqual("female");
  });

  test("test if correct marital status is returned", async () => {
    let {
      user1,
      user2,
      user3,
      user5,
      user6,
      user7,
      user8,
      user9,
      user10,
    } = await createSampleUsers();
    expect(user.getMaritalStatus(user1.maritalStatusId)).toEqual("Unknown");
    expect(user.getMaritalStatus(user3.maritalStatusId)).toEqual("Married");
    expect(user.getMaritalStatus(user5.maritalStatusId)).toEqual("Single");
    expect(user.getMaritalStatus(user6.maritalStatusId)).toEqual("Divorced");
    expect(user.getMaritalStatus(user8.maritalStatusId)).toEqual(
      "Registered Partnership"
    );
    expect(user.getMaritalStatus(user9.maritalStatusId)).toEqual(
      "Abolition of Registered Partnership"
    );
    expect(user.getMaritalStatus(user7.maritalStatusId)).toEqual("Widow");
    expect(user.getMaritalStatus(user10.maritalStatusId)).toEqual("Deceased");
    expect(user.getMaritalStatus(user2.maritalStatusId)).toEqual(null);
  });
});

describe("edit user", () => {
  test("update user returns the correct bulkwrite", async () => {
    let { user11 } = await createSampleUsers();
    let info = { name: "LaLa", address: "Lygten 10", maritalstatusId: "7" };
    let result = [
      {
        updateOne: {
          filter: { _id: user11._id },
          update: {
            $set: { name: "LaLa", address: "Lygten 10", maritalStatusId: "7" },
          },
        },
      },
    ];
    expect(user.updateUser(user11, info)).toEqual(result);
  });

  test("update user with undefined name ", async () => {
    let { user1 } = await createSampleUsers();
    let info = {
      name: undefined,
      address: undefined,
      maritalStatusId: undefined,
    };

    await user.updateUser(user1, info);

    expect(user1.name).toEqual("First user");
    expect(user1.address).toEqual("Lygten 1");
    expect(user1.maritalStatusId).toEqual("8");
  });

  test("update user with undefined status ", async () => {
    let { user11 } = await createSampleUsers();
    let info = {
      maritalStatusId: "8",
    };
    let result = [
      {
        updateOne: {
          filter: { _id: user11._id },
          update: {
            $set: {
              maritalStatusId: "8",
              name: "Eleventh user",
              address: "Lygten",
            },
          },
        },
      },
    ];
    expect(user.updateUser(user11, info)).toEqual(result);
  });

  test("update spouse return the correct bulkwrite with status 2", async () => {
    let { user1, user2 } = await createSampleUsers();
    let string = [
      {
        updateOne: {
          filter: { _id: user1._id },
          update: { $push: { spouse: user2 } },
        },
      },
    ];
    expect(user.updateSpouse(user1, "2", user2)).toEqual(
      expect.arrayContaining(string)
    );
  });

  test("update spouse return the correct bulkwrite with status 5", async () => {
    let { user1, user2 } = await createSampleUsers();
    let string = [
      {
        updateOne: {
          filter: { _id: user1._id },
          update: { $push: { spouse: user2 } },
        },
      },
    ];
    expect(user.updateSpouse(user1, "5", user2)).toEqual(
      expect.arrayContaining(string)
    );
  });

  test("update spouse return the correct bulkwrite with status 3", async () => {
    let { user1, user11 } = await createSampleUsers();
    let string = [
      {
        updateOne: {
          filter: { _id: user1._id },
          update: { $pull: { spouse: user11 } },
        },
        updateOne: {
          filter: { _id: user11._id },
          update: {
            $pull: { spouse: { _id: user1._id } },
            $set: { maritalStatusId: "3" },
          },
        },
      },
    ];
    expect(user.updateSpouse(user1, "3", user11)).toEqual(
      expect.arrayContaining(string)
    );
  });

  test("upadte child should return the correct bulkwrite", async () => {
    let { user1, user4 } = await createSampleUsers();
    let string = [
      {
        updateOne: {
          filter: { _id: user1._id },
          update: { $push: { children: user4 } },
        },
      },
    ];
    expect(user.updateChild(user1, user4)).toEqual(
      expect.arrayContaining(string)
    );
  });
});

describe("create user", () => {
  test(" createUser male should return status 200, response: user created and userId", async () => {
    let info = {
      name: "new user",
      address: "Lygten 500",
      dateOfBirth: "040506",
      genderIdentification: "0001",
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(200);
    expect(result.response.message).toBe("user created");

    let createdUser = await user.findById(result.response.userId);
    expect(createdUser.name).toBe("new user");
  });

  test("createUser with missing information returns error", async () => {
    let info = {
      address: "Lygten 500",
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(400);
    expect(result.response.error).toBe("missing fields");
  });

  test("createUser with empty body  returns error", async () => {
    let info = {};
    let result = await user.createUser(info);
    expect(result.status).toBe(400);
    expect(result.response.error).toBe("missing fields");
  });

describe('get available spouses',  () => {
  
  test('should return array of available spouse objects', async () => {
    let { user1, user4 } = await createSampleUsers()

    let result = await user.getAvailableSpouses(user4._id)
    
    expect(result[0]).toMatchObject(user1)

    expect(result.length).toBe(9)
  })

  test('should return empty array ', async () => {
    let { user1 } = await createSampleUsers()

    let result = await user.getAvailableSpouses(user1._id)
    

    expect(result.length).toBe(0)
  })
})

describe('get available children',  () => {
  
  test('should return array of available children', async () => {
    let { user1, user4 } = await createSampleUsers()
    
    let result = await user.getAvailableChildren(user1._id)

    expect(result.length).toBe(3)

    expect(result[0]).toStrictEqual(user4)
    expect(result[1]).toStrictEqual(user10)
    expect(result[2]).toStrictEqual(user11)
  })

 
})

  test("createUser with missing information returns error", async () => {
    let info = {
      genderIdentification: "0002",
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(400);
    expect(result.response.error).toBe("missing fields");
  });

  test("createUser with missing information returns error", async () => {
    let info = {
      name: "new user",
      address: "Lygten 500",
      dateOfBirth: "040506",
      genderIdentification: "0003",
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(400);
    expect(result.response.error).toBe("gender not available");
  });

  test("createUser too young Employee returns error", async () => {
    let info = {
      name: "new user",
      address: "Lygten 500",
      dateOfBirth: "040516",
      isEmployee: "true",
      genderIdentification: "0001",
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(400);
    expect(result.response.error).toBe("User is too young for an employee");
  });

  test("createUser Employee returns confirmation", async () => {
    let info = {
      name: "new user",
      address: "Lygten 500",
      dateOfBirth: "040599",
      isEmployee: "true",
      genderIdentification: "0002",
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(200);
    expect(result.response.message).toBe("user created");
  });

  test("createUser with missing information returns error", async () => {
    let info = {
      dateOfBirth: "030376",
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(400);
    expect(result.response.error).toBe("missing fields");
  });
  test("createUser with missing information returns error", async () => {
    let info = {
      isEmployee: false,
    };
    let result = await user.createUser(info);
    expect(result.status).toBe(400);
    expect(result.response.error).toBe("missing fields");
  });

  test("the throw error fails with an error", async () => {
    user.collection = {
      insertOne: function () {
        return new Promise((resolve, reject) => reject());
      },
    };
    let info = {
      name: "new user",
      address: "Lygten 500",
      dateOfBirth: "040599",
      isEmployee: "true",
      genderIdentification: "0002",
    };
    await expect(user.createUser(info)).reject;
  });
});

async function createSampleUsers() {
  const user1 = await dbHelper.createDoc(user.collectionName, {
    name: "First user",
    dateOfBirth: "010101",
    address: "Lygten 1",
    CPR: "0101010001",
    maritalStatusId: "8",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0001",
  });
  const user2 = await dbHelper.createDoc(user.collectionName, {
    name: "Second user",
    dateOfBirth: "020280",
    CVR: "12345678",
    address: "Lygten 3",
    companyNamy: "EG",
    CPR: "0202800002",
    genderIdentification: "0001",
  });
  const user3 = await dbHelper.createDoc(user.collectionName, {
    name: "Third user",
    dateOfBirth: "101245",
    address: "Lygten",
    maritalStatusId: "2",
    CPR: "1012450002",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0002",
  });
  const user4 = await dbHelper.createDoc(user.collectionName, {
    name: "Fourth user",
    dateOfBirth: "101215",
    address: "Lygten",
    CPR: "1012150002",
    maritalStatusId: "8",
    genderIdentification: "0002",
  });
  const user5 = await dbHelper.createDoc(user.collectionName, {
    name: "Fifth user",
    dateOfBirth: "141286",
    address: "Lygten",
    maritalStatusId: "1",
    CPR: "0202840001",
    genderIdentification: "0001",
  });
  const user6 = await dbHelper.createDoc(user.collectionName, {
    name: "Sixth user",
    dateOfBirth: "181245",
    address: "Lygten",
    maritalStatusId: "3",
    CPR: "1012450002",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0002",
  });
  const user7 = await dbHelper.createDoc(user.collectionName, {
    name: "Seventh user",
    dateOfBirth: "020280",
    address: "Lygten 3",
    maritalStatusId: "4",
    CPR: "0202800001",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0001",
  });
  const user8 = await dbHelper.createDoc(user.collectionName, {
    name: "Eights user",
    dateOfBirth: "020280",
    address: "Lygten 3",
    maritalStatusId: "5",
    CPR: "0202800001",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0001",
  });
  const user9 = await dbHelper.createDoc(user.collectionName, {
    name: "Nineth user",
    dateOfBirth: "101245",
    address: "Lygten",
    maritalStatusId: "6",
    CPR: "1012450002",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0002",
  });
  const user10 = await dbHelper.createDoc(user.collectionName, {
    name: "Tenth user",
    dateOfBirth: "101255",
    address: "Lygten",
    CPR: "1012150002",
    maritalStatusId: "7",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0002",
  });

  const user11 = await dbHelper.createDoc(user.collectionName, {
    name: "Eleventh user",
    dateOfBirth: "101255",
    address: "Lygten",
    CPR: "1012150002",
    maritalStatusId: "7",
    spouse: { _id: 123456, name: "some guy" },
    genderIdentification: "0002",
  });

  return {
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
    user11,
  };
}
