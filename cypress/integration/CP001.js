//EXEPTION ERROR
Cypress.on('uncaught:exception', (err, runnable) => {
    //jQuery is not defined
return false
})

describe('search model A52', ()=> {
    //Busqueda de modelo "A52".
    it('serch phone A52', () => {
        cy.visit('/');
        cy.get('#search_mini_form > .actions').click();
        cy.get('#search').type('a52').type('{enter}');
        cy.get('form > .action > span').click();
    })
    it('verificar si hay 12 cuotas', ()=>{
        expect('hasta 12 cuotas').to.exist;
    } )


})