import { users } from "./users";
import { testMaleEmployee } from "../pages/Overview";
import { getFemales } from "../pages/Overview";
import { getMales } from "../pages/Overview";
import { getChildren } from "../pages/Overview";
import { getAdults } from "../pages/Overview";
import { getEmployees } from "../pages/Overview";
import { getNotEmployees } from "../pages/Overview";
import { getUnkown } from "../pages/Overview";
import { getMarried } from "../pages/Overview";

describe("First test", function () {
  it("should return the first user", function () {
    const maleEmployeeUser = testMaleEmployee(users);
    expect(typeof maleEmployeeUser).toBe("object");
    expect(maleEmployeeUser.name).toBe("Employee Employee");
    expect(maleEmployeeUser.gender).toBe("male");
    expect(maleEmployeeUser.CVR).toBe("12345678");
  });
});

describe("Female filter", function () {
  it("should return only female", function () {
    const females = getFemales(users);
    expect(females[0].gender).toBe("female");
  });
});

describe("Male filter", function () {
  it("should return only male", function () {
    const males = getMales(users);
    expect(males[0].gender).toBe("male");
  });
});

describe("Children filter", function () {
  it("should return only children", function () {
    const children = getChildren(users);
    expect(children[0].age).toBeLessThan(18);
  });
});

describe("Adults filter", function () {
  it("should return only adults", function () {
    const adults = getAdults(users);
    expect(adults[0].age).toBeGreaterThanOrEqual(18);
  });
});

describe("Employee filter", function () {
  it("should return only Employee", function () {
    const employee = getEmployees(users);
    expect(employee[0].CVR).toBe("12345678");
  });
});

describe("Not employee filter", function () {
  it("should return only Not employee", function () {
    const notEmployee = getNotEmployees(users);
    expect(notEmployee[0]).not.toHaveProperty("CVR");
  });
});

describe("status Unkown filter", function () {
  it("should return only with unkown status", function () {
    const unknowns = getUnkown(users);
    expect(unknowns[0].maritalStatus).toBe("Unknown");
  });
});

describe("status Married filter", function () {
  it("should return only with married status", function () {
    const married = getMarried(users);
    expect(married[0].maritalStatus).toBe("Married");
  });
});
