it("loads", () => {
  const baseUrl = "http://localhost:3000";
  cy.visit(baseUrl);
  cy.contains("FakeID");
});

describe("click on single user and go to their page", () => {
  it("go to single user page", () => {
    cy.contains("Baby User").siblings().contains("Edit").click();
  });
});

describe("check if parents are visible", () => {
  it("find parents", () => {
    cy.contains("Parents").siblings().contains("Anna Anderson");
  });
});

describe("go back to the list and click the first user and makes sure that there are no parents", () => {
  it("goes back to the list", () => {
    cy.contains("FakeID").click();
  });

  it("takes the first from the list", () => {
    cy.get(".singleUser").eq(0).siblings().contains("Edit").click();
  });

  it("find no parents", () => {
    cy.get("h4").should("not.have.value", "Parents");
  });
});

describe("click on single user with a kid and go to the page to make sure kid is displayed", () => {
  it("go to  the index and then to single user page", () => {
    cy.contains("FakeID").click();
    cy.contains("Anna Anderson").siblings().contains("Edit").click();
  });

  it("check if there is a child", () => {
    cy.get("h4").contains("Children");
  });
});

describe("go back to the list and select employee to make sure there is a CVR", () => {
  it("go to  the index and then to single user employee page", () => {
    cy.contains("FakeID").click();
    cy.contains("Employee Employee").siblings().contains("Edit").click();
  });

  it("check if there is a CVR", () => {
    cy.get("h4").contains("Children");
  });
});
