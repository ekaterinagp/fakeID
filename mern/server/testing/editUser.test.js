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

describe("edit user", () => {
  test("update user returns the correct bulkwrite", async () => {
    let { user11 } = await dbHelper.createSampleUsers();
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
    let { user1 } = await dbHelper.createSampleUsers();
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
    let { user11 } = await dbHelper.createSampleUsers();
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
    let { user1, user2 } = await dbHelper.createSampleUsers();
    let string = [
      {
        updateOne: {
          filter: { _id: user1._id },
          update: {
            $set: {
              spouse: { _id: user2._id, name: user2.name },
            },
          },
        },
      },
      {
        updateOne: {
          filter: { _id: user2._id },
          update: {
            $set: {
              spouse: { _id: user1._id, name: user1.name },
              maritalStatusId: "2",
            },
          },
        },
      },
    ];
    expect(user.updateSpouse(user1, "2", user2)).toEqual(
      expect.arrayContaining(string)
    );
  });

  test("update spouse return the correct bulkwrite with status 5", async () => {
    let { user1, user2 } = await dbHelper.createSampleUsers();
    let string = [
      {
        updateOne: {
          filter: { _id: user1._id },
          update: {
            $set: {
              spouse: { _id: user2._id, name: user2.name },
            },
          },
        },
      },
      {
        updateOne: {
          filter: { _id: user2._id },
          update: {
            $set: {
              spouse: { _id: user1._id, name: user1.name },
              maritalStatusId: "5",
            },
          },
        },
      },
    ];
    expect(user.updateSpouse(user1, "5", user2)).toEqual(
      expect.arrayContaining(string)
    );
  });

  test("update spouse return the correct bulkwrite with status 3", async () => {
    let { user1, user11 } = await dbHelper.createSampleUsers();
    let string = [
      {
        updateOne: {
          filter: { _id: user1._id },
          update: { $set: { spouse: null } },
        },
        updateOne: {
          filter: { _id: user11._id },
          update: {
            $set: { spouse: null, maritalStatusId: "3" },
          },
        },
      },
    ];
    expect(user.updateSpouse(user1, "3", user11)).toEqual(
      expect.arrayContaining(string)
    );
  });

  test("upadte child should return the correct bulkwrite", async () => {
    let { user1, user4 } = await dbHelper.createSampleUsers();
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
