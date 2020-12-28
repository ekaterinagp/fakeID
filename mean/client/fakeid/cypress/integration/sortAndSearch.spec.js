describe("search for Frey", () => {
    it("should show Freyr and Freya", () => {
      const baseUrl = "http://localhost:4200/";
      cy.visit(baseUrl);
      cy.get("#search-text").write("frey");
      cy.get(".singleUser h3").eq(0).should('have.text', 'Freya Parks')
      cy.get(".singleUser h3").eq(1).should('have.text', 'Freyr Rodostan')
    });

    // it("get the one which contains Marcy", () => {
    //   cy.get(".singleUser").eq(3).get("button").eq(0).should("have.text", "Edit");
    // });
  });