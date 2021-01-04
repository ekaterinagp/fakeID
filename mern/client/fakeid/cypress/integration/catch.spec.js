describe("edit user", () => {
  it("Edit Martina Falm user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Martina Falm").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('input[name="name"]').clear();
    cy.get('select[name="address"]').select("Lygten 17");

    cy.get('input[type="submit"]').click();
  });
});

// describe("edit user", () => {
//   it("Edit Martina Falm user", () => {
//     const baseUrl = "http://localhost:3000";
//     cy.visit(baseUrl);
//     cy.contains("Martina Falm").siblings().contains("Edit").click();
//     cy.get(".tabs button").eq(1).click();
//     cy.get('input[name="name"]').clear();
//     cy.get('input[name="name"]').type("Marina Falmb");
//     cy.get('select[name="address"]').select("Lygten 17");
//     cy.get('input[type="submit"]').click();
//   });
// });

import { fetchChildren } from "../../src/components/EditUser";

describe("fetchchildren", () => {
  it("throws an error for wrong try", () => {
    fetchChildren("", { _id: 500 }).catch((err) => expect(err).to.be(Error));
  });
});

import { fetchSpouses } from "../../src/components/EditUser";

describe("fetchSpouses", () => {
  it("throws an error for wrong attempt", () => {
    fetchSpouses("", { _id: 500 }).catch((err) => expect(err).to.be(Error));
  });
});

import { postChanges } from "../../src/components/EditUser";

describe("postChanges with error", () => {
  it("throws an error for wrong attempt", () => {
    postChanges("", { _id: 500 }, {}).catch((err) => expect(err).to.be(Error));
  });
});

describe("postChanges", () => {
  it("postchanges succseed", () => {
    postChanges(
      "http://localhost:9090/users/5fe05cf1c9ec6c4a30c02271",
      { _id: "5fe05cf1c9ec6c4a30c02271" },
      {
        address: "Lygten 17, 2400 Norrebro",
        childId: null,
        maritalStatusId: "8",
        name: "Lea Cop",
        spouseId: "",
      }
    ).then((data) => {
      expect(data).to.exist;
    });
  });
});
