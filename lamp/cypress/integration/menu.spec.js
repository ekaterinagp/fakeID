it("loads", () => {
    const baseUrl = "http://localhost:80/fakeid/lamp";
    cy.visit(baseUrl);
    cy.contains("FakeID");
  });


  describe("click on create and go to create page", () => {
    it("go to create page", () => {
      cy.get('header a').eq(1).click();

      cy.get('.createForm').should('be.visible');
    });
  });
  
  describe("click on overview and go to overview page from create page", () => {
    it("go to overcyew page", () => {
      cy.get('header a').eq(0).click();

      cy.get('.container').should('be.visible');
    });
  });