describe("find user with status unknown and not a child, click Edit, click Edit again, change address to the opposite,  add spouse first in the list, add relationship married", () => {
  it("find user with status unknown and not a child", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.contains("SHOW FILTERS").click();
    cy.contains("Adult").click();
    cy.contains("Not Employee").click();

    // cy.get("p").contains("Unknown").siblings().contains("Edit").click();
  });

  it("selects first adult with status unknown", () => {
    cy.get("p").contains("Unknown").siblings().contains("Edit").click();
  });

  it("click Edit again", () => {
    cy.get("button").contains("EDIT").click();
  });

  it("find first spouse on the list", () => {
    cy.get("mat-select[formControlName=spouseId]")
      .click()
      .get("mat-option")
      .eq(0)
      .click();
  });

  it("find second child on the list", () => {
    cy.get("mat-select[formControlName=childId]")
      .click()
      .get("mat-option")
      .eq(1)
      .click();
  });

  it("set status Married", () => {
    cy.get("mat-select[formControlName=maritalStatusId]")
      .click()
      .get("mat-option")
      .contains("Married")
      .click();
  });

  it("set second address on the list", () => {
    cy.get("mat-select[formControlName=address]")
      .click()
      .get("mat-option")
      .eq(1)
      .click();
  });

  it("click save", () => {
    cy.get("button").contains("Save").click();
  });

  it("check if notification is there", () => {
    cy.get("mat-dialog-content").should("be.visible");
    cy.get("mat-dialog-content").contains("User updated");
  });
});

describe("check inline html notifications", () => {
  it("press Close", () => {
    cy.contains("Close").click();
  });
});

describe("edit child user", () => {
  it("finds child user", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.contains("SHOW FILTERS").click();
    cy.contains("Child").click();
  });

  it("takes last child and click Edit", () => {
    cy.get(".singleUser h3").eq(-1).siblings().contains("Edit").click();
  });

  it("clicks parent link", () => {
    cy.get(".parentClick").click();
  });

  it("clicks child link back", () => {
    cy.get(".childClick").click();
  });

  it("clicks Edit again and change name", () => {
    cy.get("button").contains("EDIT").click();
    cy.get('input[id="name"]').clear();
    cy.get('input[id="name"]').type("Lena Hendriksen");
  });

  it("click save", () => {
    cy.get("button").contains("Save").click();
  });
});

describe("edit employee user", () => {
  it("finds employee user", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.contains("SHOW FILTERS").click();
    cy.contains("Employee").click();
  });

  it("takes first employee and click Edit", () => {
    cy.get(".singleUser h3").eq(0).siblings().contains("Edit").click();
  });

  it("clicks Edit again and change name", () => {
    cy.get("button").contains("EDIT").click();
    cy.get('input[id="name"]').clear();
    cy.get('input[id="name"]').type("Employee Dan");
  });

  it("click save", () => {
    cy.get("button").contains("Save").click();
  });
});

describe("edit user with a spouse", () => {
  it("finds user with a spouse", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.contains("SHOW FILTERS").click();
    cy.contains("Adult").click();
    cy.contains("Not Employee").click();
  });

  it("takes first with status Married", () => {
    cy.get(".singleUser p")
      .contains("Married")
      .siblings()
      .contains("Edit")
      .click();
  });

  it("cancel changes", () => {
    cy.get("button").contains("EDIT").click();
    cy.get("button").contains("Cancel").click();
  });
});
