describe("Create a not employee user male", () => {
  let user = {
    name: "Michael Lund",
    dateOfBirth: "010288",
    gender: "Male",
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
      .contains("Lygten 37, 2400 Norrebro")
      .click();
    cy.get("mat-radio-group[formControlName=isEmployee]")
      .children()
      .contains("Not Employee")
      .click();
    cy.get('button[type="submit"]').click();
  });
});

describe("Create a not employee user female", () => {
  let user = {
    name: "Mephisto Pedersen",
    dateOfBirth: "010990",
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
      .eq(1)
      .click();
    cy.get("mat-radio-group[formControlName=isEmployee]")
      .children()
      .contains("Not Employee")
      .click();
    cy.get('button[type="submit"]').click();
  });

  it("check if notification is there", () => {
    cy.get("mat-dialog-content").should("be.visible");
    cy.get("mat-dialog-content").contains("User created");
  });

  it("check is from is reset", () => {
    cy.get('input[id="name"]').should("be.empty");
    cy.get('input[id="dateOfBirth"]').should("be.empty");
    // cy.get("mat-select[formControlName=gender]").should("be.empty");
    // cy.get("mat-select[formControlName=address]").should("be.empty");
  });
});

describe("check inline html notifications", () => {
  it("press Close", () => {
    cy.contains("Close").click();
  });
});

describe("check notifications", () => {
  it("type name and birthday and then remove it", () => {
    cy.get('input[id="name"]').type("Blabla");
    cy.get('input[id="name"]').clear();
    cy.get(".alert").contains("Name is required");
    cy.get('input[id="dateOfBirth"]').type("010187");
    cy.get('input[id="dateOfBirth"]').clear();
    cy.get(".alert").contains("Birth date is required");
    cy.get("mat-radio-group[formControlName=isEmployee]")
      .children()
      .contains("Employee")
      .click();
  });
});
