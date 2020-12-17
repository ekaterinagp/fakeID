
it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
  });
  

  describe("open sorters", () => {
      it("click show filters", () => {
        cy.get('.filterBtn').click();
  
        cy.get('.labelRadio label').eq(0).should('have.text', ' Age ');
        cy.get('.labelRadio label').eq(1).should('have.text', ' Name ');
  
      });
      it("filter by age and name", () => {
  
        cy.get('.labelRadio label').eq(0).click();
        
        cy.get('.singleUser h3').eq(0).should('have.text', 'Fnurg Fnarg')
        
        cy.get('.labelRadio label').eq(1).click();
        cy.get('.singleUser h3').eq(0).should('have.text', 'Charlie Kan')

    });
  });