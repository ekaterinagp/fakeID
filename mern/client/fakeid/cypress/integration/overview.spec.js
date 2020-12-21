// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("Overview page contains users", () => {
  it("Find Anna Anderson and Peter Peterson ", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".singleUser").eq(0).contains("Anna Anderson");
    cy.get(".singleUser").eq(1).contains("Peter Peterson");
  });
});
