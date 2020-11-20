it("loads", () => {
  const baseUrl = "http://localhost:80/fakeid/lamp";
  cy.visit(baseUrl);
  cy.contains("FakeID in LAMP");
});

describe('find element which contains Lars and click login', () => {

  it('get the one which contains Lars', () => {
    cy.contains('p', 'Lars').siblings().contains("Login").click();

  })
})

describe('count elelemts singleUser', () => {

  it('get all elements with a class singleUser', () => {
    cy.get('.container').find('.singleUser').should('have.length', 2);
  })
})