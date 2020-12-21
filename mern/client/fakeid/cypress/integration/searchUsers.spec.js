// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("search", () => {
  it("search for for son", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".searchBar input").type("son");
    cy.get(".searchBar button").click();
    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Anderson");
  });
});
