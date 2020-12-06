context('User Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should be able to submit userName', () => {
    cy.get('#userNameValue').type('Mahatma Gandhi').should('have.value', 'Mahatma Gandhi');

    cy.get('#getUserName button')
      .click()
      .should(() => {
        expect(localStorage.getItem('currentUser-grocery-app')).to.eq('"Mahatma Gandhi"');
        expect(localStorage.getItem('usersList-grocery-app')).to.eq('["Mahatma Gandhi"]');
      });
  });
});
