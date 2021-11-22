
//EXEPTION ERROR
Cypress.on('uncaught:exception', (err, runnable) => {
    //jQuery is not defined
return false
})


/*  CP004 - 1) Visitar la tienda de movistar, 2) Explorar seccion de "Celulares Usados", 3) Seleccionar "Moto G5s", 
4) Ver caracteristicas Destacadas.  */

describe('CP004', ()=>{
    it('CP0004', ()=>{
        cy.visit('/');
        cy.get(':nth-child(5) > .footer-column-content > .content > .links > :nth-child(6) > a').click();
        cy.get('#product-item-info_2329 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.get('#tab-label-description-title').click();
    })
})