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

  it("sort by name", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".filterBtn").click();
    cy.get("label").contains("Name").click();
    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Anderson");
    cy.get("label").contains("Name").click();
  });

  it("sort by age ", () => {
    cy.get("label").contains("Age").click();

    cy.get(".singleUser h3").eq(0).should("have.text", "Baby Maria");
  });

  it("click both and then unclick age ", () => {
    cy.get(".filterBtn").click();
    cy.get("label").contains("Age").click();
    cy.get("label").contains("Name").click();
    cy.get("label").contains("Age").click();
    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Anderson");
  });

  it("click both and then unclick both ", () => {
    cy.get(".filterBtn").click();
    cy.get("label").contains("Age").click();
    cy.get("label").contains("Name").click();
    cy.get("label").contains("Age").click();
    cy.get("label").contains("Name").click();
    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Anderson");
  });
});

describe("filters are not shown", () => {
  it("click show filters and then to hide filters", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".filterBtn").click();
    cy.get(".filterBtn").click();
    cy.get(".filterBtn").should("have.text", "Show Filters");
  });
});
