/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // insiro o login do usuario
    inserirLogin() {
        cy.get(loginElements.inputLogin)
    }
  
    //insere a senha do usuario
    inserirSenha() {
        cy.get(loginElements.inputSenha)
    }

    //clico no botão LOGGIN
    clicarBotaoLogin() {
        cy.get(loginElements.clicarBotaoLogin()).click()
    }

    // Verifica foi direcionado ao inventário de produtos"
    visualizarInventario() {
        cy.get(loginElements.diretorioInventario()).should('be.visible')
    }
}

export default LoginPage;