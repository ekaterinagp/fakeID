it("loads", () => {
  const baseUrl = "http://localhost:3000";
  cy.visit(baseUrl);
  cy.contains("FakeID");
});

describe("edit user", () => {
  it("Edit Jonas Jonassen user", () => {
    cy.contains("Jonas Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('input[name="name"]').clear();
    cy.get('input[name="name"]').type("Johan Jonassen");
    cy.get('select[name="address"]').select("Lygten 17");
    cy.get('select[name="maritalStatusId"]').select("Married");
    cy.get('select[name="spouseId"]').select("Pernille Petersen");

    cy.get('input[type="submit"]').click();
  });
  it("check Johan information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Johan Jonassen");
    // cy.get('.tabs button').eq(0).click()
    // cy.get('.singleUserPage h1').contains(user.name)
    // cy.get('.userInfo p').eq(4).contains(user.address)
    // cy.get('.userInfo p').eq(3).contains(user.maritalStatus)
    // cy.get('.userInfo p').eq(5).contains(user.spouse)
  });

  //   it("edit lea information is changed", () => {
  //     cy.get(".menu a").eq(0).click();
  //     cy.get(".singleUser").eq(7).contains("Married");
  //   });
});
