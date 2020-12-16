it("loads", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("FakeID");
});

describe("Create form creates users", () => {

    let user = {
        name: "Lea RoboCop",
        dateOfBirth: "1988-10-13",
        address_id: 1,
        genderValue: "0002",
      };


    it("Create New user", () => {
        cy.get('.menu a').eq(1).click();

        cy.get('input[name="name"]').type(user.name);
        cy.get('input[name="dateOfBirth"]').type(user.dateOfBirth);
        cy.get('select[name="address"]').select("Lygten 17");
        cy.get("label").contains("Female").click();
        cy.get("label").contains("Not Employee").click();

        cy.get('input[type="submit"]').click();


    });

    it("makes sure new user is created", () => {
        cy.visit("localhost:3000");
        cy.contains(user.name);
      });
  });



   
  