describe("find first h3 tag which should be Anna Andersen", () => {
  it("get the one which contains Lars", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Andersen");
  });
});

describe("test all filters", () => {
  it("press show Male", () => {
    cy.contains("SHOW FILTERS").click();
    cy.contains("Male").click();
    cy.get("p").should("not.have.value", "Female");
  });

  it("press to show all", () => {
    cy.contains("All").click();
    cy.contains("Female").click();
    cy.get('mat-button-toggle-group[name="gender"]').contains("All").click();
    cy.contains("Employee").click();
    cy.get('mat-button-toggle-group[name="isCompany"]').contains("All").click();

    cy.contains("Reset filters").click();
  });
});
