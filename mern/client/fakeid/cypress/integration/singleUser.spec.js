
it("loads", () => {
  const baseUrl = "http://localhost:3000";
  cy.visit(baseUrl);
  cy.contains("FakeID");
});

describe("click on single user and go to their page", () => {
    it("go to single user page", () => {
      cy.get('.singleUser .button').eq(0).click();

      cy.get('.userInfo h1').should('have.text', 'Matt Damon');

      cy.get('.userInfo p').eq(-1).should('have.text', ' Lucas Damon');
    
    });
});