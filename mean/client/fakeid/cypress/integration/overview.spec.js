it("loads", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
  });
  
  describe("find first h3 tag which should say Matt Damon", () => {
    it("get the one which contains Lars", () => {
      cy.get('.singleUser h3').eq(0).should('have.text', 'Matt Damon')
    });
    it("get the one which contains Marcy", () => {
      cy.get(".singleUser").eq(3).get("button").eq(0).should("have.text", 'Edit')
    });
  });
  