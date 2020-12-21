describe("edit user", () => {
  it("Edit Martina Falm user", () => {
    const baseUrl = "http://localhost:3000";
    cy.visit(baseUrl);
    cy.contains("Martina Falm").siblings().contains("Edit").click();
    cy.get(".tabs button").eq(1).click();
    cy.get('input[name="name"]').clear();
    cy.get('select[name="address"]').select("Lygten 17");
    const staticResponse = { forceNetworkError: true };
    cy.intercept("**/users/**", staticResponse);
    cy.get('input[type="submit"]').click();
  });
});

import { fetchChildren } from "../../src/components/EditUser";

describe("fetchchildren", () => {
  it("throws an error for wrong try", () => {
    fetchChildren("", { _id: 500 }).catch((err) => expect(err).to.be(Error));
  });
});

// describe(" spouses are not fetched", () => {
//   it("fetch spouses throw error", () => {
//     const baseUrl = "http://localhost:3000";
//     cy.visit(baseUrl);
//     cy.contains("Martina Falm").siblings().contains("Edit").click();
//     cy.get(".tabs button").eq(1).click();
//     const staticResponse = { forceNetworkError: true };
//     cy.intercept("**/users/**/spouses", staticResponse);
//     cy.intercept("**/users/**/children", staticResponse);
//     cy.get('input[name="name"]').clear();
//     cy.get('select[name="address"]').select("Lygten 17");

//     cy.intercept("**/users/**", staticResponse);

//     cy.get('input[type="submit"]').click();
//     cy.log("Failed to load resource: net::ERR_EMPTY_RESPONSE");
//     it("makes sure notification is shown", () => {
//       cy.get(".notification").should(
//         "have.text",
//         "Something went wrong, please try again"
//       );
//     });
//   });
// });

// describe(" children are not fetched", () => {
//   it("fetch children throw error", () => {
//     const baseUrl = "http://localhost:3000";
//     cy.visit(baseUrl);
//     cy.contains("Martina Falm").siblings().contains("Edit").click();
//     cy.get(".tabs button").eq(1).click();
//     const staticResponse = { forceNetworkError: true };
//     cy.intercept("**/users/**/children", staticResponse);
//     cy.get('input[name="name"]').clear();
//     cy.get('select[name="address"]').select("Lygten 17");

//     // cy.intercept("**/users/**", staticResponse);
//     cy.get('input[type="submit"]').click();
//   });
// });
// force obj.method() to return a promise rejected with an error

// const staticResponse = { forceNetworkError: true }
// cy.intercept('**/users/**', staticResponse);

// describe("test throw error", () => {
//   it("start", () => {
//     const baseUrl = "http://localhost:3000";
//     cy.visit(baseUrl);
//     const staticResponse = { forceNetworkError: true };
//     cy.intercept("**/users/**/children", staticResponse);
//     const user = {
//       getName: (arg) => {
//         return arg;
//       },

//       updateEmail: (arg) => {
//         return arg;
//       },

//       fail: () => {
//         throw new Error("fail whale");
//       },
//     };

//     cy.spy(user, "fail");
//     try {
//       // invoke fail
//       user.fail();
//     } catch (e) {
//       cy.log(e);
//     }

//     expect(user.fail).to.have.thrown("Error");
//   });
// });

// it("gets error fetching children", () => {
//   let url = "http://localhost:9090";
//   let user = { _id: 345 };

//   // let values = {
//   //     signText: testText,
//   //     entityId: "",
//   //     requestId: "",
//   //     returnUrl: "Tests2",
//   //     signTextFormat: null,
//   //     pid: "TestProfile1",
//   //     cvr: null,
//   //     rid: null,
//   //     signedSignatureProof: "EGDW",
//   //     signedFingerPrint: "SlemId"
//   // }

//   cy.request({
//     method: "GET",
//     url: `http://localhost:9090/users/${user._id}/children`,
//   }).then((resp) => {
//     console.log(resp);
//     expect(resp.status).to.eq(403);
//   });
// });
