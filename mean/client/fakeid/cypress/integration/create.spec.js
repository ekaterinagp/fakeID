describe("Create a not employee user", () => {
  const baseUrl = "http://localhost:4200/create";
  cy.visit(baseUrl);
  let user = {
    commonName: "Sarah Lund",
    dateOfBirth: "010199",
    genderValue: "0001",
    profileAddressId: 2,
    description: `description Sarah Lund`,
  };
});
