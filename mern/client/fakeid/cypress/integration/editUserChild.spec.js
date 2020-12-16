it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
});


describe("edit form edits users add child", () => {
    let user = {
        child: 'Fnurg Fnarg'
      };
      it("Edit Ursula user", () => {
        cy.get('.singleUser a.button').eq(-1).click()
        cy.get('.tabs button').eq(1).click()


        cy.get('select[name="childId"]').select(user.child);

        cy.get('input[type="submit"]').click();

    });
 
        
    it("check Ursula information is changed", () => {
        cy.get('.tabs button').eq(0).click()
        cy.get('.userInfo p').eq(6).contains(user.child)
      });

    it("check child information is changed", () => {
        cy.get('.menu a').eq(0).click()
        cy.get('.singleUser a').eq(5).click()
        cy.get('.userInfo p').eq(5).contains('Ursula')
      });
 })