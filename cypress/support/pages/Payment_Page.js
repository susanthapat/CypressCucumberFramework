export const PaymentPage={

    selectPaymentMethod(){ 
        cy.get('.bankwire').click()
       // cy.get('.cheque')
    },
    confirmOrder(){ 
        cy.get('#cart_navigation > .button > span').click().wait(5000)
        },

        checkOrderCompleted(){
           return cy.get('a[class="button-exclusive btn btn-default"]')
            }
    
  }