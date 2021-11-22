//EXEPTION ERROR
Cypress.on('uncaught:exception', (err, runnable) => {
    //jQuery is not defined
return false
})

describe('search by filters', ()=> {
    //Filtro por 256GB
    it('search by filters', ()=> {
        cy.visit('/');    
        cy.get('#layered-filter-block > .block-title > strong').click();
        cy.get('[attribute="movistar_internalmemory"] > .filter-options-content > .items > :nth-child(3) > a').click();
        cy.screenshot();
        
    })
    
})