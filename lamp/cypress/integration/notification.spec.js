it('finds the content "type"', () => {
  cy.visit("localhost:80/fakeid/lamp/user.php?id=1");

  cy.contains("FakeID");
});

describe("click on user, update and get notification", () => {
  it("go to update and get notification", () => {
    cy.get(".tabs button").eq(1).click();

    cy.get('select[name="address_id"]').select("Lygten 17");
    cy.get("input[type=submit]").click();
    cy.get(".notification").should("be.visible");
  });
});

describe("create new user wwrongly get error notification", () => {
  it("go to create and get notification", () => {
    cy.visit("localhost:80/fakeid/lamp/create.php");
    cy.get("input[type=submit]").click();
    cy.get(".notification").should("be.visible");
  });
});
