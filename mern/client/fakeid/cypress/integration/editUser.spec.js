// it("loads", () => {
//   const baseUrl = "http://localhost:3000";
//   cy.visit(baseUrl);
//   cy.contains("FakeID");
// });

describe("Make sure that Jonassen has no spouse ", () => {
  it("find Jonassen and make sure he is not coupled", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select("Single");
    cy.get('input[type="submit"]').click();
  });
});

describe("edit user", () => {
  it("Edit Johan Jonassen user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    // cy.get('input[name="name"]').clear();
    // cy.get('input[name="name"]').type("Jonas Jonassen");
    // cy.get('select[name="address"]').select("Lygten 17");
    cy.get('select[name="maritalStatusId"]').select("Married");
    cy.get('select[name="spouseId"]').select("Pernille Petersen");

    cy.get('input[type="submit"]').click();
  });
  it("check Johan information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Jonas Jonassen");
  });
});

describe("Make sure that Jonassen has no spouse ", () => {
  it("find Jonassen and make sure he is not coupled", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('select[name="maritalStatusId"]').select("Divorced");
    cy.get('input[type="submit"]').click();
  });
});

describe("edit user", () => {
  it("Edit Johan Jonassen user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    // cy.get('input[name="name"]').clear();
    // cy.get('input[name="name"]').type("Jonas Jonassen");
    // cy.get('select[name="address"]').select("Lygten 17");
    cy.get('select[name="maritalStatusId"]').select("Registered Partnership");
    cy.get('select[name="spouseId"]').select("Pernille Petersen");

    cy.get('input[type="submit"]').click();
  });
  it("check Johan information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Jonas Jonassen");
  });
});

describe("edit user", () => {
  it("Edit Johan Jonassen user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Jonas Jonassen").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    // cy.get('input[name="name"]').clear();
    // cy.get('input[name="name"]').type("Johan Jonassen");
    cy.get('select[name="address"]').select("Lygten 37");
    // cy.get('select[name="maritalStatusId"]').select("Married");
    // cy.get('select[name="spouseId"]').select("Pernille Petersen");

    cy.get('input[type="submit"]').click();
  });
  it("check Johan information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Jonas Jonassen");
  });
});

describe("edit user", () => {
  it("Edit Linda Linderson user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Linda Linderson").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();

    cy.get('select[name="address"]').select("Lygten 17");

    cy.get('input[type="submit"]').click();
  });
  it("check Linda information is changed", () => {
    cy.contains("FakeID").click();
    cy.contains("Linda Linderson");
  });
});

describe("edit user", () => {
  it("Edit Linda Linderson user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Linda Linderson").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();

    cy.get('select[name="childId"]').select("Baby Boy");

    cy.get('input[type="submit"]').click();
    cy.clock();
    cy.tick(2000);
    cy.get(".notification").should("have.text", "User updated");
    cy.tick(4000);
    cy.get(".notification").should("have.text", "User updated");
    cy.tick(10000);
    cy.get(".notification").should("not.exist");
  });
});

// import { handleNotification } from "../../src/pages/SingleUser";
