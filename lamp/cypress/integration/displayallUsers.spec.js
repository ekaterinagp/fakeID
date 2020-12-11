it("loads", () => {
  const baseUrl = "http://localhost:80/fakeid/lamp";
  cy.visit(baseUrl);
  cy.contains("FakeID");
});

describe("find element which contains Lars and click Edit", () => {
  it("get the one which contains Lars", () => {
    cy.contains("p", "Lars").siblings().contains("Edit").click();
  });
});
