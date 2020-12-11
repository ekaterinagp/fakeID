
it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
});

describe("Overview page contains users", () => {
    it("Find Matt Damon and Marcy", () => {

      cy.get('.singleUser').eq(0).contains('Matt Damon');
      cy.get('.singleUser').eq(3).contains('Marcy Jacobs');
    });
  });