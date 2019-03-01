export const ItemDetailsPage= {
  
    addItemToCart() {
      cy.get('.exclusive > span').click().wait(5000)
      cy.get('.button-medium > span').click()  
      }
    }