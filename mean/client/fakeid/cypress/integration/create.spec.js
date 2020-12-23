describe("Create a not employee user", () => {
  let user = {
    name: "Sarah Lund",
    dateOfBirth: "010199",
    gender: "Female",
    address: "Lygten 17, 2400 Norrebro",
    isEmployee: false,
  };

  it("goes to create page", () => {
    const baseUrl = "http://localhost:4200/create";
    cy.visit(baseUrl);
  });

  it("types in new user details", () => {
    cy.get('input[id="name"]').type(user.name);
    cy.get('input[id="dateOfBirth"]').type(user.dateOfBirth);
    cy.get("mat-select[formControlName=gender]").should("be.visible");
    cy.get("mat-select[formControlName=gender]")
      .click()
      .get("mat-option")
      .contains(user.gender)
      .click();
    cy.get("mat-select[formControlName=address]")
      .click()
      .get("mat-option")
      .contains("Lygten 17, 2400 Norrebro")
      .click();
    cy.get("mat-radio-group[formControlName=isEmployee]")
      .children()
      .contains("Not Employee")
      .click();
    cy.get('button[type="submit"]').click();
  });
});
