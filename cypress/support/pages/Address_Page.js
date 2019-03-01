export const AddressPage={

    addComment(){ 
        cy.get('#ordermsg > .form-control').type('Please call 0276556865 before delivery.')
    },

    proceedToCheckOut(){ 
        cy.get('.cart_navigation > .button > span').click().wait(5000)
        }
    
  }