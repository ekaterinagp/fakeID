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