// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("open sorters", () => {
  it("click show filters", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".filterBtn").click();

    cy.get("label").contains("Age");
    cy.get("label").contains("Name");
  });
  it("sort by age and name", () => {
    cy.get("label").contains("Age").click();

    cy.get(".singleUser h3").eq(0).should("have.text", "Baby Maria");

    cy.get("label").contains("Name").click();
    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Anderson");
  });
});
