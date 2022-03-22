/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site SwagLabs", () => {
    loginPage.acessarSite();
})

When("insiro o login do usuario", () => {
    loginPage.inserirLogin();  
})
When("insiro a senha do usuario", () => {
    loginPage.inserirSenha();
})

And("clico no botão LOGGIN", () => {
    loginPage.clicarBotaoLogin();
})

Then("devo ser direcionado ao inventário de produtos", () => {
    loginPage.visualizarInventario();
})