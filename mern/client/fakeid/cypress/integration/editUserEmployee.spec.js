// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("edit form edits employee", () => {
  let address = "Lygten 17";
  it("Edit employee user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Employee Employee").siblings().contains("Edit").click();

    cy.get(".tabs button").eq(1).click();

    cy.get('select[name="address"]').select(address);

    cy.get('input[type="submit"]').click();
  });

  it("check employee information is changed", () => {
    cy.get(".tabs button").eq(0).click();
    cy.get(".userInfo p").eq(1).contains(address);
  });
});
