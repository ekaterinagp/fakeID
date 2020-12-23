describe("find user Petr Petrov, click Edit, click Edit again, change address to the opposite, name to Peter, add spouse first in the list, add relationship married", () => {
  it("get the one which contains Petr Petrov", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.get("h3").contains("Petr Petrov").siblings().contains("Edit").click();
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

  it("find first spouse on the list", () => {
    cy.get("mat-select[formControlName=maritalStatusId]")
      .click()
      .get("mat-option")
      .contains("Married")
      .click();
  });

  it("find first spouse on the list", () => {
    cy.get("mat-select[formControlName=address]")
      .click()
      .get("mat-option")
      .eq(1)
      .click();
  });

  it("click save", () => {
    cy.get("button").contains("Save").click();
  });
});
