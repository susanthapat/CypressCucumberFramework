export const SignInPage= {
  
    signIn() {
      cy.get('input[id="email"]').type('susantha@gmail.com')
      cy.get('input[id="passwd"]').type('1qaz2wsx@')
     //cy.get('input[id="email_create"]').type('susantha@gmail.com')
       cy.get('#SubmitLogin > span').click() 
      }
    }