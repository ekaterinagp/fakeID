it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
});

describe("Create user triggers success notification", () => {

  

    it("Create New user", () => {
        cy.get('.menu a').eq(2).click();

        cy.get('input[type="submit"]').click();
    });

    it("makes sure notification is shown", () => {
        cy.get('.notification').should('have.text', 'missing fields')
      });
  });