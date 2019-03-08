//import SummeryPage from "../../page/SummeryPage";
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import {HomePage} from "../../pages/Home_Page";
import {SummeryPage} from "../../pages/Summery_Page";
import {ItemDetailsPage} from "../../pages/Item_Details_Page";
import {SignInPage} from "../../pages/SignIn_Page";
import {AddressPage} from "../../pages/Address_Page";
import {ShippingPage} from "../../pages/Shipping_Page";
import {PaymentPage} from "../../pages/Payment_Page";


const url = '/index.php?'
Given('I\'m on the automationpractice index page', () => {
  cy.visit(url);
})

When(`I select the product`, () => {
  HomePage.selectProduct();
})

When(`I add item to the cart`, () => {
  ItemDetailsPage.addItemToCart();
  cy.scrollTo('bottom')
  SummeryPage.clickOnProceedtocheckout();
})

When(`I sign in using username {string} and password {string}`, (username,password) => {
  SignInPage.signIn({uname:username,pwd:password});
})


When(`I add comments {string}`, (comment) => {
  AddressPage.addComment({commntstoadd:comment})
  AddressPage.proceedToCheckOut()
})


When(`I marked agreement check box`, () => {
  ShippingPage.markTermsofservice()
  ShippingPage.proceedToPayments()
})


When(`I selec payment method`, () => {
  PaymentPage.selectPaymentMethod()
})

When(`I confirm order`, () => {
  PaymentPage.confirmOrder()
})


Then(`I should be in order completed page`, () => {
  //To Do : This need to be replaced with proper validation than this.
 PaymentPage.checkOrderCompleted().should('be.visible')
})