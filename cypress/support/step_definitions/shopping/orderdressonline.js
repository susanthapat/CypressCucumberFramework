//import SummeryPage from "../../page/SummeryPage";
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import {HomePage} from "../../pages/Home_Page";
import {SummeryPage} from "../../pages/Summery_Page";
import {ItemDetailsPage} from "../../pages/Item_Details_Page";
import {SignInPage} from "../../pages/SignIn_Page";
import {AddressPage} from "../../pages/Address_Page";
import {ShippingPage} from "../../pages/Shipping_Page";
import {PaymentPage} from "../../pages/Payment_Page";


const url = 'http://automationpractice.com/index.php?'
Given('I open automationpractice index page', () => {
  cy.visit(url);
  HomePage.selectProduct();
  ItemDetailsPage.addItemToCart();
  SummeryPage.clickOnProceedtocheckout();
  SignInPage.signIn();
  AddressPage.addComment()
  AddressPage.proceedToCheckOut()
  ShippingPage.markTermsofservice()
  ShippingPage.proceedToPayments()
  PaymentPage.selectPaymentMethod()
  PaymentPage.confirmOrder()
  PaymentPage.checkOrderCompleted();

})


When(`I type {string} in search box`, (keyWord) => {
  cy.get('input[name=q]').type((keyWord) )
})

When(`I click on search button`, () => {
  cy.get('#sbtc > button ').focus().click({force: true} )
})


Then(`Result list will be apeared`, () => {
 
  cy
  .get('img')
  .each(($el, index, $list) => {
    cy.wrap(el).invoke('alt').should('contain','Image result for Chocolate cake')
  })
})