it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
});
describe("edit form edits users add child", () => {
    let address = 'Lygten 17'
      it("Edit employee user", () => {
        cy.get('.singleUser a.button').eq(3).click()
        cy.get('.tabs button').eq(1).click()


        cy.get('select[name="address"]').select(address);

        cy.get('input[type="submit"]').click();

    });

    it("check employee information is changed", () => {
        cy.get('.tabs button').eq(0).click()
        cy.get('.userInfo p').eq(3).contains(address)
      });
});