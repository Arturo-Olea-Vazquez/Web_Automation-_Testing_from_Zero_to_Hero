
/// <reference types="cypress" />

describe('Our first suite', ()=> {

    it('first test', () =>{
        cy.visit('/pages');
        cy.get('.menu-title').contains('Forms').click({force: true});
        cy.get('.menu-title').contains('Form Layouts').click({force: true});
        cy.get('.sidebar-toggle > nb-icon > .eva > [data-name="Layer 2"] > g > [width="24"]').click({force: true});
    });
});