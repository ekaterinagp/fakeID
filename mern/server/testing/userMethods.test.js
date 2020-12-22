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

describe("User methods", () => {
  test("should return user collection", async () => {
    let users = await dbHelper.createSampleUsers();
    const result = await user.getAll();
    expect(result[0]).toMatchObject(users.user1);
    expect(result[1]).toMatchObject(users.user2);
    expect(result[2]).toMatchObject(users.user3);
  });

  test("should get user with children", async () => {
    let users = await dbHelper.createSampleUsers();
    const result = await user.getAll();
    expect(result[10]).toMatchObject(users.user11);
  });

  test("test calculate age", async () => {
    let users = await dbHelper.createSampleUsers();
    expect(users.user1.dateOfBirth).toEqual("010101");
  });
  test("test calculate age", async () => {
    let users = await dbHelper.createSampleUsers();
    expect(user.calculateAge(users.user1.dateOfBirth)).toEqual(19);
  });
  test("test calculate age", async () => {
    let users = await dbHelper.createSampleUsers();
    expect(user.calculateAge(users.user5.dateOfBirth)).toEqual(34);
  });

  test("test calculate age", async () => {
    let users = await dbHelper.createSampleUsers();
    expect(user.calculateAge(users.user6.dateOfBirth)).toEqual(74);
  });

  test("test if correct gender is returned", async () => {
    let { user1, user2, user3 } = await dbHelper.createSampleUsers();
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
    } = await dbHelper.createSampleUsers();
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

describe("user methods getAvailableSpouses", () => {
  test("should return array of available spouse objects", async () => {
    let {
      user1,
      user4,
      user5,
      user6,
      user7,
      user9,
      user10,
      user11,
    } = await dbHelper.createSampleUsers();

    let result = await user.getAvailableSpouses(user4._id);
    expect(result.length).toBe(5);

    expect(result[0]).toStrictEqual(user1);
    expect(result[1]).toStrictEqual(user5);
    expect(result[2]).toStrictEqual(user6);
    expect(result[3]).toStrictEqual(user7);
    expect(result[4]).toStrictEqual(user9);
    expect(result.some((user) => user.name === user4.name)).toBe(false);
  });

  test("should return array without user5 ", async () => {
    let { user5 } = await dbHelper.createSampleUsers();

    let result = await user.getAvailableSpouses(user5._id);

    expect(result.some((user) => user.name === "Fifth user")).toBe(false);
    expect(result.length).toBe(4);
  });
});

describe(" userMethods getAvailableChildren", () => {
  test("should return array of available children", async () => {
    let { user1, user4 } = await dbHelper.createSampleUsers();

    let result = await user.getAvailableChildren(user1._id);

    expect(result.length).toBe(1);

    expect(result[0]).toStrictEqual(user4);
    expect(result.some((user) => user.name === "Fifth user")).toBe(false);
  });
});
