Feature: Buy dress from online shopping site
@focus
  Scenario: Search and buy dress from http://automationpractice.com
    Given I'm on the automationpractice index page
    When I select the product
    When I add item to the cart
    When I sign in using username "susantha@gmail.com" and password "1qaz2wsx@"
    When I add comments "Please call 0276556865 before delivery"
    When I marked agreement check box
    When I selec payment method
    When I confirm order
    Then I should be in order completed page



 



 
