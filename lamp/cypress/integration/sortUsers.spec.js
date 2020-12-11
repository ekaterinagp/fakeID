it("loads", () => {
  const baseUrl = "http://localhost:80/fakeid/lamp";
  cy.visit(baseUrl);
  cy.contains("FakeID");
});

describe("click on sort by age and sort users by age", () => {
  it("sorts by age", () => {
    cy.get(".filterBtn").click();
    cy.get("label[for=sortAge]").click();

    cy.get(".singleUser").first().contains("child");
  });
});

describe("click on sort by age and sort users by age", () => {
  it("sorts by age", () => {
    cy.get("label[for=sortAge").click();
    cy.get("label[for=sortName").click();

    cy.get(".singleUser").first().contains("Allan");
  });
});

describe("click on sort by age and nameand sort users by age and name", () => {
  it("sorts by age and name", () => {
    cy.get("label[for=sortAge").click();
    cy.get("label[for=sortName").click();

    cy.get(".singleUser").first().contains("Small");
  });
});
