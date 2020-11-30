it("loads", () => {
    const baseUrl = "http://localhost:80/fakeid/lamp";
    cy.visit(baseUrl);
    cy.contains("FakeID");
  });
  
  describe("fill in the search bar and press search", () => {
    it("find correct user", () => {
        cy.get(".searchInput").type('lisa');
        cy.get(".searchBtn").click();

        cy.get(".singleUser").eq(0).contains('Lisa');
        cy.get(".singleUser").should('have.length', 1)
    });
  });


  describe("clear search after results are shown", () => {
    it("find correct user", () => {
        cy.get(".clearSearchBtn").click();

        cy.get(".singleUser").contains('Lisa');
        cy.get(".singleUser").contains('Lars');
    });
  });