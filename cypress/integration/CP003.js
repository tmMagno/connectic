//EXEPTION ERROR
Cypress.on('uncaught:exception', (err, runnable) => {
   // jQuery is not defined 
return false
}) 

  describe('Caso de prueba 003', ()=> {
    it('Caso de prueba 003', ()=> {
      cy.url()
      cy.visit('/');
      cy.get('#product-item-info_6004 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
      cy.get('#open-installments-modal').click();
      cy.get('#selectBank').select('Credicoop');
      cy.get('#selectCardByBank').select('Visa');
    })
    it('medio de pago con 60 cuotas', ()=> {
       expect('No exite medio de pago con 60 cuotas').to.be.false;
    })
})
