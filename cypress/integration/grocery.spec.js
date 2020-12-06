context('Grocery Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.get('#userNameValue').type('Mahatma Gandhi');
    cy.get('#getUserName button').click();
  });

  it("should show 'Grocery list' on the screen", () => {
    cy.get('#groceryList h1').should('contain', 'Grocery list');
  });

  it('should be able to add grocery item', () => {
    cy.get('#groceryItemValue').type('1ltr Milk').should('have.value', '1ltr Milk');
    cy.get('[data-test-id="add-a-grocery-item-button"]')
      .click()
      .should(() => {
        expect(localStorage.getItem('groceryList-grocery-app')).to.eq(
          '{"Mahatma Gandhi":["1ltr Milk"]}'
        );
      });
  });
});
