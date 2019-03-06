export const AddressPage={

    addComment(vals={}){ 
        cy.get('#ordermsg > .form-control').type(vals.commntstoadd)
    },

    proceedToCheckOut(){ 
        cy.get('.cart_navigation > .button > span').click().wait(5000)
        }
    
  }