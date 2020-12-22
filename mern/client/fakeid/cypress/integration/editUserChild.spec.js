// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("edit form edits users add child", () => {
  let user = {
    child: "Baby User",
  };
  it("Edit Pernille Petersen user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Peter Petersen").siblings().contains("Edit").click();

    cy.get(".tabs button").eq(1).click();

    cy.get('select[name="childId"]').select(user.child);

    cy.get('input[type="submit"]').click();
  });

  it("check Pernille information is changed", () => {
    cy.get(".tabs button").eq(0).click();
    cy.contains(user.child);
  });

  it("check child information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Baby User").siblings().contains("Edit").click();
    cy.get(".userInfo p").eq(5).contains("Peter Petersen");
  });
});
