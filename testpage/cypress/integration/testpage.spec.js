describe("click on lamp and go to lamp page", () => {
    it("go to lamp page", () => {
      const baseUrl = "http://localhost/fakeid/testpage";
      cy.visit(baseUrl);
      cy.get("a").eq(0).click();
  
      cy.get(".loginBtn").eq(0).click();
      cy.get('h1').should('have.text', 'Lola Ulrik')
      cy.get('h4').eq(0).should('have.text', 'Address')
      cy.get('p').eq(0).should('have.text', 'Lygten 17, 2200 København N')
    });
  });

describe("click on mern and go to mern page", () => {
    it("go to mern page", () => {
      const baseUrl = "http://localhost/fakeid/testpage";
      cy.visit(baseUrl);
      cy.get("a").eq(1).click();
  
      cy.get(".button").eq(1).click();
      cy.get('h1').should('have.text', 'Johanna Gunnarson')
      cy.get('p').eq(0).should('have.text', 'Lygten 17, 2400 Norrebro')
    });
  });
  
describe("click on mean and go to mean page", () => {
    it("go to create page", () => {
      const baseUrl = "http://localhost/fakeid/testpage";
      cy.visit(baseUrl);
      cy.get("a").eq(2).click();
  
      cy.get(".singleUser a.mat-focus-indicator.mat-raised-button").eq(1).click();
      cy.get('h1').should('have.text', 'Johanna Gunnarson')
      cy.get('p').eq(0).should('have.text', 'Lygten 17, 2400 Norrebro')
    });
  });



  describe("change id in url and get error", () => {
    it("get error", () => {
      const baseUrl = "http://localhost/fakeid/testpage/user.html?mean=123345456456";
      cy.visit(baseUrl);
  
      cy.get('h1').eq(1).should('have.text', 'You do not have access to view this page')
      
    });
  });
