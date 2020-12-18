it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
  });

  describe("open filters", () => {
    it("click show filters", () => {
      cy.get('.filterBtn').click();

    });
    it("filter by children and employees", () => {

      cy.get('label[for="children"]').click();
      
      cy.get('label[for="employee"]').click()
      
      cy.get('.singleUser').should('not.exist')

  });
    it("filter all female employees", () => {

      cy.get('label[for="ageAll"]').click();
      
      cy.get('label[for="female"]').click()
      
      cy.get('.singleUser h3').eq(0).should('have.text', 'Marcy Jacobs')

  });
    it("filter not Employess", () => {
      
      cy.get('label[for="genderAll"]').click()
      cy.get('label[for="notEmployee"]').click()
      
      cy.contains('Marcy Jacobs').should('not.exist')

  });

  it("filter all children ", () => {
      
    cy.get('label[for="children"]').click()
    
    cy.contains('Fnurg Fnarg')
    cy.contains('Johanna Johansen')
    cy.contains('Lucas Damon')

});

});