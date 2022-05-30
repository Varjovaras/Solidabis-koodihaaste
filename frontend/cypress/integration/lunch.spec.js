/// <reference types="cypress" />

describe('Lunch app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000').then(() => {
      if (sessionStorage.getItem('city')) {
        sessionStorage.removeItem('city');
      }
      if (sessionStorage.getItem('vote')) {
        sessionStorage.removeItem('vote');
      }
    });
  });

  it('searching city', () => {
    cy.contains('search cities');
    cy.get('#city').type('Turku');
    cy.get('#search-button').click();
    cy.contains('Turku');
    cy.contains('Woolshed Turku');
  });

  describe('Dishes and voting', () => {
    beforeEach(() => {
      cy.initCity();
    });

    it('a restaurant and dishes are found', () => {
      cy.get('#restaurant').contains('show dishes').click();
      cy.get('#dish');
    });

    it('searching restaurant works', () => {
      cy.get('#filter-restaurants').type('Woolshed');
      cy.get('#restaurant').contains('Woolshed Turku');
    });

    it('a restaurant can be voted and vote amount changes', () => {
      cy.get('#votes')
        .invoke('text')
        .then((text1) => {
          cy.get('#vote-button').click();
          cy.get('#votes')
            .invoke('text')
            .should((text2) => {
              expect(text1).not.to.eq(text2);
            });
        });
      cy.get('#vote-reset-button').click();
    });

    it('reset vote button works', () => {
      cy.get('#votes')
        .invoke('text')
        .then((text1) => {
          cy.get('#vote-button').click();
          cy.get('#vote-reset-button').click();

          cy.get('#votes')
            .invoke('text')
            .should((text2) => {
              expect(text1).to.eq(text2);
            });
        });
    });
  });

  describe('Session storage works', () => {
    beforeEach(() => {
      cy.initCity();
    });

    it('session city works', () => {
      cy.reload().then(() => {
        cy.contains('Turku');
        cy.contains('Woolshed Turku');
      });
    });
    it('session vote works', () => {
      cy.get('#vote-button').click();
      cy.reload().then(() => {
        cy.contains('My vote:');
      });
    });
  });

  describe('Results page works', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/results').then(() => {
        cy.contains('Results for');
      });
    });
    it('should contain day buttons and date', () => {
      cy.contains('previous day');
      cy.contains('next day');
      const date = new Date();
      cy.contains(date.toJSON().slice(1, 10).replace(/-/g, '/'));
    });
    it('manual date input works', () => {
      cy.get('#date-input').type('2020-01-01');
      cy.get('#submit-date-button').click();
      cy.contains('2020/01/01');
      cy.get('#previous-day-button').click();
      cy.contains('2019/12/31');
      cy.contains('No votes given today');
      cy.get('#next-day-button').click();
      cy.contains('2020/01/01');
    });
  });
});
