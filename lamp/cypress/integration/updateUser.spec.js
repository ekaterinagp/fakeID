//not dynamic test, check values before running

it("loads correct URL", () => {
  const baseUrl = "http://localhost:80/fakeid/lamp";
  cy.visit(baseUrl + "/user.php?id=2");
  cy.contains("User Lars Lalala");
});

describe("Change address and add spouse from the list", () => {
  it("select new address", () => {
    cy.get('select[name="address_id"]').select("Lygten 17");
  });

  it("select spouse", () => {
    cy.get('select[name="spouse_id"]').select("Lisa Lalala");
  });

  it("select status", () => {
    cy.get('select[name="marital_status_id"]').select("Registered Partnership");
  });

  it("clicks save", () => {
    cy.get("button").contains("Save").click();
  });

  it("makes sure  user is updated", () => {
    cy.visit("localhost:80/fakeid/lamp/");
    cy.get(".singleUser").children().contains("Lars");
  });
});
