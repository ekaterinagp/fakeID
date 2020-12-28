describe("sort users", () => {
    it("type frey and find freyr and freya", () => {
      const baseUrl = "http://localhost:4200/";
      cy.visit(baseUrl);
      cy.get("input[id='search-text']").type("frey");
      cy.wait(300)
    
        cy.get(".singleUser h3").eq(0).should('have.text', 'Freya Parks')
        cy.get(".singleUser h3").eq(1).should('have.text', 'Freyr Rodostan')
    });


  });