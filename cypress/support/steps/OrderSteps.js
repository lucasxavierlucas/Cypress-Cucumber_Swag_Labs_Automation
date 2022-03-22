/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given(/^clico em ADD TO CART$/, () => {
	loginPage.clicarADD();;
});

When(/^clico no CART$/, () => {
	loginPage.clicarCART;;
});

And(/^clico em CHECKOUT$/, () => {
	loginPage.clicarCHECKOUT;;
});

And(/^insiro meu nome$/, () => {
	loginPage.inserirNome();;
});

And(/^insiro meu sobrenome$/, () => {
	loginPage.inserirSobrenome();;
});

And(/^insiro meu CEP$/, () => {
	loginPage.inserirCEP();;
});

And(/^clico em CONTINUE$/, () => {
	loginPage.clicarCONTINUE;;
});

And(/^clico em FINISH$/, () => {
	loginPage.clicarFINISH;;
});

Then(/^devo ser direcionado a pagina de conclusão do pedido$/, () => {
    loginPage.visualizarPonyExpress;;
});