Cypress.Commands.add('initCity', () => {
  cy.visit('localhost:3000').then(() => {
    if (sessionStorage.getItem('city')) {
      sessionStorage.removeItem('city');
    }
    if (sessionStorage.getItem('vote')) {
      sessionStorage.removeItem('vote');
    }
  });
  cy.contains('search cities');
  cy.get('#city').type('Turku');
  cy.get('#search-button').click();
  cy.contains('Turku');
  cy.contains('Woolshed Turku');
});
