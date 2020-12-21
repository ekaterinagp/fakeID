// it("loads", () => {
//     const baseUrl = "http://localhost:3000";
//     cy.visit(baseUrl);
//     cy.contains("FakeID");
// });

describe("Create user triggers success notification", () => {
  let user = {
    name: "Martina Falm",
    dateOfBirth: "1978-11-13",
    address: "Lygten 17",
  };

  it("Create New user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.get(".menu a").eq(2).click();

    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="dateOfBirth"]').type(user.dateOfBirth);
    cy.get('select[name="address"]').select(user.address);
    cy.get("label").contains("Female").click();
    cy.get("label").contains("Not Employee").click();

    cy.get('input[type="submit"]').click();
  });

  it("makes sure notification is shown", () => {
    cy.get(".notification").should("have.text", "User Created");
  });
});
