export const ShippingPage={

    markTermsofservice(){ 
        cy.get('#cgv').click()
        cy.screenshot('test-screenshot')
    },
    
    proceedToPayments(){ 
        
        cy.get('.cart_navigation > .button > span').click()
    }
    
   
  }