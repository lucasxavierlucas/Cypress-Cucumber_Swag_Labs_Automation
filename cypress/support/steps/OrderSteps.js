/* global Given, Then, When */

import OrderPage from '../pageobjects/OrderPage'
const orderPage = new OrderPage


Given(/^estou na tela PRODUCTS$/, () => {
	orderPage.acessarSite();;
});


When("insiro o login do usuario", () => {
    orderPage.inserirLogin();  
})
When("insiro a senha do usuario", () => {
    orderPage.inserirSenha();
})

And("clico no botão LOGGIN", () => {
    orderPage.clicarBotaoLogin();
})

Then("devo ser direcionado ao inventário de produtos", () => {
    orderPage.visualizarInventario();
})

When(/^clico em ADD TO CART$/, () => {
	orderPage.clicarADD();;
});

And(/^clico no CART$/, () => {
	orderPage.clicarCART;;
});

And(/^clico em CHECKOUT$/, () => {
	orderPage.clicarCHECKOUT;;
});

And(/^insiro meu nome$/, () => {
	orderPage.inserirNome();;
});

And(/^insiro meu sobrenome$/, () => {
	orderPage.inserirSobrenome();;
});

And(/^insiro meu CEP$/, () => {
	orderPage.inserirCEP();;
});

And(/^clico em CONTINUE$/, () => {
	orderPage.clicarCONTINUE;;
});

And(/^clico em FINISH$/, () => {
	orderPage.clicarFINISH;;
});

Then(/^devo ser direcionado a pagina de conclusão do pedido$/, () => {
	orderPage.visualizarPonyExpress;;
});
