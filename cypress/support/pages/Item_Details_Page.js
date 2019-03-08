export const ItemDetailsPage= {
  
    addItemToCart() {
      cy.get('.exclusive > span').click()
      cy.get('.button-medium > span').click()  
      }
    }