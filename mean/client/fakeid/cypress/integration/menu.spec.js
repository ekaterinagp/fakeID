it("loads", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
  });
  
  describe("click on create and go to create page", () => {
    it("go to create page", () => {
      cy.get(".menu a").eq(2).click();
  
      cy.get("p").should("have.text", "create-user works!");
    });
  });
  
  describe("click on overview and go to overview page from create page", () => {
    it("go to overview page", () => {
      cy.get(".menu a").eq(0).click();
  
      cy.get("h1").eq(1).should("have.text", "Overview");
    });
  });
  describe("click on overview and go to overview page from create page", () => {
    it("go to overview page", () => {
      cy.get(".menu a").eq(1).click();
  
      cy.get(".menu a").eq(1).should("have.class", "active");
    });
  });
  