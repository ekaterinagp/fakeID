it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
  });
  

  
  describe("search", () => {
    it("search for for F", () => {
        cy.get('.searchBar input').type('fr')
        cy.get('.searchBar button').click()
        cy.get('.singleUser h3').eq(0).should('have.text', 'Fridrik Tarp')
    })
})