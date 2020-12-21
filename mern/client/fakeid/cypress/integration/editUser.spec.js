// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("edit user", () => {
  it("Edit Johan Jonassen user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Johan Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('input[name="name"]').clear();
    cy.get('input[name="name"]').type("Jonas Jonassen");
    // cy.get('select[name="address"]').select("Lygten 17");
    cy.get('select[name="maritalStatusId"]').select("Married");
    cy.get('select[name="spouseId"]').select("Pernille Petersen");

    cy.get('input[type="submit"]').click();
  });
  it("check Johan information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Jonas Jonassen");
  });
});

describe("edit user", () => {
  it("Edit Johan Jonassen user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Jonas Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    // cy.get('input[name="name"]').clear();
    // cy.get('input[name="name"]').type("Johan Jonassen");
    cy.get('select[name="address"]').select("Lygten 37");
    // cy.get('select[name="maritalStatusId"]').select("Married");
    // cy.get('select[name="spouseId"]').select("Pernille Petersen");

    cy.get('input[type="submit"]').click();
  });
  it("check Johan information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Jonas Jonassen");
  });
});

describe("edit user", () => {
  it("Edit Linda Linderson user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Linda Linderson").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();

    cy.get('select[name="address"]').select("Lygten 17");

    cy.get('input[type="submit"]').click();
  });
  it("check Linda information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Linda Linderson");
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
