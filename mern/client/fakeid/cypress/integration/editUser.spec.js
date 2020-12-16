it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
});


describe("edit form edits users", () => {
    let user = {
        name: "Ursula",
        address: "Lygten 17",
        maritalStatus: 'Married',
        spouse: 'Lea Rodostan'
      };

      it("Edit Ursula user", () => {
        cy.get('.singleUser a.button').eq(-1).click()
        cy.get('.tabs button').eq(1).click()



        cy.get('input[name="name"]').clear();
        cy.get('input[name="name"]').type(user.name);
        cy.get('select[name="address"]').select(user.address);
        cy.get('select[name="maritalStatusId"]').select(user.maritalStatus);
        cy.get('select[name="spouseId"]').select(user.spouse);

        cy.get('input[type="submit"]').click();

    });
    it("check ursula information is changed", () => {
        cy.get('.tabs button').eq(0).click()
        cy.get('.singleUserPage h1').contains(user.name)
        cy.get('.userInfo p').eq(4).contains(user.address)
        cy.get('.userInfo p').eq(3).contains(user.maritalStatus)
        cy.get('.userInfo p').eq(5).contains(user.spouse)
    });
        
   

    it("edit lea information is changed", () => {
        cy.get('.menu a').eq(0).click()
        cy.get('.singleUser').eq(7).contains('Married')
      });
 })

