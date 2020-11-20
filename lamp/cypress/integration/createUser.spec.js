it('finds the content "type"', () => {
  cy.visit('localhost:80/fakeid/lamp/create.php')

  cy.contains('FakeID ')
})

