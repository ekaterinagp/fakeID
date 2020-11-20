it('finds the content "type"', () => {
  cy.visit('localhost:80/fakeid/lamp')

  cy.contains('FakeID in LAMP')
})


