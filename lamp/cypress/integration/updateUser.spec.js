//not dynamic test, check values before running

it("loads correct URL", () => {
  const baseUrl = "http://localhost:80/fakeid/lamp";
  cy.visit(baseUrl + "/user.php?id=2");
  cy.contains("User Lars Lalala");
});

describe("Change address ", () => {
  it("select new address", () => {
    cy.get(".tabs").first().click();
    cy.get('select[name="address_id"]').select("Lygten 17");
  });

  // it("select spouse", () => {
  //   cy.get('select[name="spouse_id"]').select("Lisa Lalala");
  // });

  it("select status", () => {
    cy.get('select[name="marital_status_id"]').select("Divorced");
  });

  it("clicks save", () => {
    cy.get("input").contains("Save").click();
  });

  it("makes sure  user is updated", () => {
    cy.visit("localhost:80/fakeid/lamp/");
    cy.get(".singleUser").children().contains("Lars");
  });

  it("makes sure  spouse  is updated", () => {
    cy.get(".singleUser").contains("Lisa").siblings().contains("Divorced");
  });
});
