/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('front page can be opened', function () {
    cy.contains('Lounaat');
    cy.contains(
      'Note app, Department of Computer Science, University of Helsinki 2022'
    );
  });

  it('login form can be opened', function () {
    cy.contains('login').click();
    cy.get('#username').type('mluukkai');
    cy.get('#password').type('salainen');
    cy.get('#login-button').click();

    cy.contains('Matti Luukkainen logged in');
  });
});
