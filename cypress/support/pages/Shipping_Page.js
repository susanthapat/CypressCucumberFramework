export const ShippingPage={

    markTermsofservice(){ 
        cy.get('#cgv').click().wait(5000)
    },
    
    proceedToPayments(){ 
        cy.get('.cart_navigation > .button > span').click().wait(5000)
    }
    
   
  }