describe("search for Frey", () => {
    it("sort by name and check first user is Charlie ", () => {
      const baseUrl = "http://localhost:4200/";
      cy.visit(baseUrl);
      cy.wait(300)

      cy.get('mat-expansion-panel-header').click();
      cy.get('#sortByName').click()
      cy.get(".singleUser h3").eq(0).should('have.text', 'Charlie Kan')
    });
    
    it('sort by age and check first user is Freyr', () => {
      cy.get('#sortByAge').click()
      cy.get(".singleUser h3").eq(0).should('have.text', 'Freyr Rodostan')
    })

  });