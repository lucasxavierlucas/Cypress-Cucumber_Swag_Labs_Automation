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


    //clica no botão ADD TO CART
    clicarADD() {
    cy.get(loginElements.clicarADD()).click()
    cy.scrollTo('topRight')
    
}

  //clica no botão CART
  clicarCART() {
 // cy.visit ( www.saucedemo.com/cart.html )
   cy.get(loginElements.clicarCART()).click()
      
}

  //clica no botão CHECKOUT
 clicarCHECKOUT() {
   cy.get(loginElements.clicarCHECKOUT()).click()
}

// insire o nome do usuario
inserirNome() {
    cy.get(loginElements.clicarCART()).click()
    cy.get(loginElements.clicarCHECKOUT()).click()
    cy.get(loginElements.inserirNome)
}


// insire o sobrenome do usuario
inserirSobrenome() {
    cy.get(loginElements.inserirSobrenome)
}

// insire o CEP do usuario
inserirCEP() {
    cy.get(loginElements.inserirCEP)
    cy.get(loginElements.clicarCONTINUE()).click()
    cy.get(loginElements.clicarFINISH()).click()
}

//clica no botão CONTINUE
clicarCONTINUE() {
    cy.get(loginElements.clicarCONTINUE()).click()
}

 //clica no botão FINISH
 clicarFINISH() {
    cy.get(loginElements.clicarFINISH()).click()
}

// Verifica se foi direcionado a pagina de conclusão do pedido
visualizarPonyExpress() {
    cy.get(loginElements.diretorioPonyExpress()).should('be.visible')
}



}

export default LoginPage;