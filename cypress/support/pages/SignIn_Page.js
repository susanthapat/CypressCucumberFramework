export const SignInPage= {
  
    signIn(vals={}) {
      cy.get('input[id="email"]').type(vals.uname)
      cy.get('input[id="passwd"]').type(vals.pwd)
      cy.get('#SubmitLogin > span').click() 
      }
    }