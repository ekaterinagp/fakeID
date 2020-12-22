it("loads", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
  });
  
  describe("click on create and go to create page", () => {
    it("go to create page", () => {
      cy.get(".menu a").eq(2).click();
  
      cy.get("h2").should("have.text", "Create User");
    });
  });
  
  describe("click on overview and go to overview page from create page", () => {
    it("go to overcyew page", () => {
      cy.get(".menu a").eq(0).click();
  
      cy.get("h2").should("have.text", "Overview");
    });
  });
  