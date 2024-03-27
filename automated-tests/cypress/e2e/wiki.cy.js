import { override } from 'joi';

describe('Referencia al primer mecanismo de control retroalimentado', () => {
  beforeEach(() => {
    cy.visit('https://google.com');
    cy.get('#L2AGLb').focus().click();
  });
  it('Verificar año de referencia para el primer mecanismo de control retroalimentado inventado por Ctesibius', () => {
    cy.intercept('/complete/search?*').as('search-complete');
    cy.get('#APjFqb').type('automatización{enter}');
    cy.wait('@search-complete').its('response.statusCode').should('eq', 200);
    cy.get('a').contains('Wikipedia').click();
    cy.origin('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n', () => {
      cy.get('p')
        .contains(/año\d*.*Ctesibius/)
        .should('contain', 270);
    });
    cy.screenshot({ override: true, capture: 'viewport' });
  });
});
