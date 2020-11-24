it("loads", () => {
  const baseUrl = "http://localhost:80/fakeid/lamp";
  cy.visit(baseUrl);
  cy.contains("FakeID");
});

describe("get the fourth element in the list and click on it", () => {
  it("get #4 in the list", () => {
    cy.get(".singleUser").eq(3).find(".userName").click();
  });
});
