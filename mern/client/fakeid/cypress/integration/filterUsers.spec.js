// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("open filters", () => {
  it("click show filters", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".filterBtn").click();
  });
  it("filter by children and employees", () => {
    cy.get('label[for="children"]').click();

    cy.get('label[for="employee"]').click();

    cy.get(".singleUser").should("not.exist");
  });
  it("filter all male employees", () => {
    cy.get('label[for="ageAll"]').click();

    cy.get('label[for="male"]').click();

    cy.get(".singleUser h3").eq(0).should("have.text", "Employee Employee");
  });
  it("filter not Employess", () => {
    cy.get('label[for="genderAll"]').click();
    cy.get('label[for="notEmployee"]').click();

    cy.contains("Employee Employee").should("not.exist");
  });

  it("filter all children ", () => {
    cy.get('label[for="children"]').click();

    cy.contains("Baby User");
    cy.contains("Baby Maria");
  });

  it("filter all adults ", () => {
    cy.get('label[for="adults"]').click();
    cy.get('label[for="employeeAll"]').click();

    cy.contains("Anna Anderson");
    cy.contains("Peter Peterson");
  });

  it("filter all female ", () => {
    cy.get('label[for="female"]').click();

    cy.contains("Anna Anderson");
  });
});
