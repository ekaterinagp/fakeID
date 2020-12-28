describe("filter users", () => {
  it("press 'show filters', then female and child", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.get("mat-expansion-panel-header").click();
    cy.get(".mat-button-toggle-label-content").contains("Female").click();
    cy.get(".mat-button-toggle-label-content").contains("Child").click();
  });

  it("should contain Baby User", () => {
    cy.get(".singleUser h3").eq(0).should("have.text", "Baby User");
  });
});
