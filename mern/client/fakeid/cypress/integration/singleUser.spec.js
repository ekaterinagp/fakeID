// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("click on single user and go to their page", () => {
  it("go to single user page", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
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
    cy.get("h4").contains("CVR");
  });
});

describe("go back to the list and select employee to make sure there is a CVR", () => {
  it("go to  the index and then to single user employee page", () => {
    cy.contains("FakeID").click();
    cy.contains("Employee Employee").siblings().contains("Edit").click();
  });

  it("check if there is a CVR", () => {
    cy.get("h4").contains("CVR");
  });
});

describe("go to single user and select marital status Single", () => {
  it("go to  the index and then to single user  page to select status single", () => {
    cy.contains("FakeID").click();
    cy.contains("Petr Petrov").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select("Single");
    cy.get('input[type="submit"]').click();
  });
});

describe("go to single user and select marital status Divorced", () => {
  it("go to  the index and then to single user  page to select status Divorced", () => {
    cy.contains("FakeID").click();
    cy.contains("Petr Petrov").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select("Divorced");
    cy.get('input[type="submit"]').click();
  });
});

describe("go to single user and select marital status Widow", () => {
  it("go to  the index and then to single user  page to select status Widow", () => {
    cy.contains("FakeID").click();
    cy.contains("Petr Petrov").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select("Widow");
    cy.get('input[type="submit"]').click();
  });
});

describe("go to single user and select marital status Abolition of Registered Partnership", () => {
  it("go to  the index and then to single user  page to select status Abolition of Registered Partnership", () => {
    cy.contains("FakeID").click();
    cy.contains("Petr Petrov").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select(
      "Abolition of Registered Partnership"
    );
    cy.get('input[type="submit"]').click();
  });
});

describe("go to single user and select marital status Deceased", () => {
  it("go to  the index and then to single user  page to select status Deceased", () => {
    cy.contains("FakeID").click();
    cy.contains("Petr Petrov").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select("Deceased");
    cy.get('input[type="submit"]').click();
  });
});

describe("go to single user and select marital no status", () => {
  it("go to  the index and then to single user  page to select no status ", () => {
    cy.contains("FakeID").click();
    cy.contains("Petr Petrov").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select("Unknown");
    cy.get('input[type="submit"]').click();
  });
});
