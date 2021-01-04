import { User } from "../../src/app/models/user.model.ts";

describe("create a user from constructor", () => {
  it("goes to create page", () => {
    const baseUrl = "http://localhost:4200/create";
    cy.visit(baseUrl);
  });

  it("creates new user", () => {
    let newUser = new User(
      "12345444",
      "Bob Bob",
      "041190",
      30,
      "Lygten, 37",
      "Male",
      "0001",
      "Unknown",
      "",
      "",
      null,
      null,
      null,
      "8",
      [],
      [],
      false.false
    );

    expect(newUser).to.have.property("name");
    expect(newUser.name).to.be.a("string");
    expect(newUser).to.have.property("dateOfBirth");
    expect(newUser.dateOfBirth).to.be.a("string");
    expect(newUser).to.have.property("age");
    expect(newUser).to.have.property("address");
    expect(newUser).to.have.property("gender");
    expect(newUser).to.have.property("genderIdentification");
    expect(newUser).to.have.property("maritalStatus");
    expect(newUser).to.have.property("children");
    expect(newUser).to.have.property("parents");
    expect(newUser).to.have.property("isChild");
    expect(newUser).to.have.property("isEmployee");
  });
});
