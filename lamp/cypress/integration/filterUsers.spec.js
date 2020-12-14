it("loads", () => {
  const baseUrl = "http://localhost:80/fakeid/lamp";
  cy.visit(baseUrl);
  cy.contains("FakeID");
});

/**
 * test show hide click
 * test results for all params are correct
 */

describe("click on show filters and show all filters", () => {
  it("show filters", () => {
    cy.get(".filterBtn").click();

    cy.get(".filtersContainer").should("be.visible");
  });
});

describe("click on show filters and filter based on gender", () => {
  it("show male users", () => {
    cy.get("label[for=male]").click();

    cy.get(".singleUser").contains("Male");
    cy.get(".singleUser").should("not.have", "Female");
  });
});

describe("click on show filters and filter based on employment", () => {
  it("show no employees", () => {
    cy.get("label[for=employee]").click();
    cy.get(".singleUser").should("not.have", "12345678");
  });
});

describe("click employee and child filters and show no user", () => {
  it("show no users", () => {
    cy.get("label[for=child]").click();

    cy.get(".singleUser").should("not.exist");
  });
});

describe("click both gender filters and show all users", () => {
  it("show all users", () => {
    cy.get("label[for=employee]").click();
    cy.get("label[for=child]").click();
    cy.get("label[for=female]").click();

    cy.get(".singleUser").contains("Female");
    cy.get("label[for=female]").click();
    cy.get(".singleUser").contains("Male");
  });
});
