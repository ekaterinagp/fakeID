// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("Create form creates users", () => {
  let user = {
    name: "Kasper Simonsen",
    dateOfBirth: "1988-02-23",
    address_id: 2,
    genderValue: "0001",
  };

  it("Create New user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".menu a").eq(2).click();

    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="dateOfBirth"]').type(user.dateOfBirth);
    cy.get('select[name="address"]').select("Lygten 17");
    cy.get("label").contains("Female").click();
    cy.get("label").contains("Not Employee").click();

    cy.get('input[type="submit"]').click();
    cy.clock();
    cy.tick(4000);
    cy.get(".notification").should("have.text", "User Created");
    cy.tick(6000);
    cy.get(".notification").should("not.exist");
  });

  it("makes sure new user is created", () => {
    cy.visit("localhost:3000");
    cy.contains(user.name);
  });
});

describe("Create form throw error", () => {
  let user = {
    name: "",
    dateOfBirth: "1982-11-26",
    address_id: 1,
    genderValue: "0002",
  };

  it("Create New user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".menu a").eq(2).click();

    // cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="dateOfBirth"]').type(user.dateOfBirth);
    cy.get('select[name="address"]').select("Lygten 17");
    cy.get("label").contains("Female").click();
    cy.get("label").contains("Not Employee").click();

    cy.get('input[type="submit"]').click();
  });
});
