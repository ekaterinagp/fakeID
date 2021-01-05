describe("click on create and go to create page", () => {
  it("go to create page", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.get(".menu a").eq(2).click();
  });
});

describe("click on overview and go to overview page from create page", () => {
  it("go to overview page", () => {
    cy.get(".menu a").eq(0).click();

    cy.get(".mat-content").should("have.text", " SHOW FILTERS ");
  });
});
describe("click on overview and go to overview page from create page", () => {
  it("go to overview page", () => {
    cy.get(".menu a").eq(1).click();

    cy.get(".menu a").eq(1).should("have.class", "active");
  });
});
