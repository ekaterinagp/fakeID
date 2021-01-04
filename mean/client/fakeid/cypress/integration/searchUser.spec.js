describe("sort users", () => {
  it("type an and find Anna and Johan", () => {
    const baseUrl = "http://localhost:4200/";
    cy.visit(baseUrl);
    cy.get("input[id='search-text']").type("an");
    cy.wait(300);

    cy.get(".singleUser h3").eq(0).should("have.text", "Anna Andersen");
    cy.get(".singleUser h3").eq(1).should("have.text", "Johan Jonassen");
  });
});
