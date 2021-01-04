describe("search for Anna", () => {
  it("sort by name and check first user is Anna ", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.wait(300);

    cy.get("mat-expansion-panel-header").click();
    cy.get("#sortByName").click();
    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Andersen");
  });

  it("sort by age and check first user is Baby Boy", () => {
    cy.get("#sortByAge").click();
    cy.get(".singleUser h3").eq(0).should("have.text", "Baby Boy");
  });
});
