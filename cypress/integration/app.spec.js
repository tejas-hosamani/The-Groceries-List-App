context("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should open the app", () => {
    cy.window().should("have.property", "appInit");
  });
});
