/// <reference types="Cypress" />

import OrderElements from '../elements/OrderElements' //OrderElements
const orderElements = new OrderElements
const url = Cypress.config("baseUrl")

class OrderPage {
   
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // insiro o login do usuario
    inserirLogin() {
        cy.get(orderElements.inputLogin)
    }
  
    //insere a senha do usuario
    inserirSenha() {
        cy.get(orderElements.inputSenha)
    }

    //clico no botão LOGGIN
    clicarBotaoLogin() {
        cy.get(orderElements.clicarBotaoLogin()).click()
    }
    // Acessa o site que será testado
  //  acessarSite() {
     
    //   cy.get(orderElements.diretorioOrder()).should('be.visible')
       
   // }

      //clica no botão ADD TO CART
      clicarADD() {
        cy.get(orderElements.clicarADD()).click()
        cy.scrollTo('topRight')
        
    }

      //clica no botão CART
      clicarCART() {
       //cy.visit ( www.saucedemo.com/cart.html )
       cy.get(orderElements.clicarCART()).click()
          
    }

      //clica no botão CHECKOUT
      clicarCHECKOUT() {
        cy.get(orderElements.clicarCHECKOUT()).click()
    }

    // insire o nome do usuario
    inserirNome() {
        cy.get(orderElements.inserirNome)
    }

    
    // insire o sobrenome do usuario
    inserirSobrenome() {
        cy.get(orderElements.inserirSobrenome)
    }

    // insire o CEP do usuario
    inserirCEP() {
        cy.get(orderElements.inserirCEP)
    }

    //clica no botão CONTINUE
    clicarCONTINUE() {
        cy.get(orderElements.clicarCONTINUE()).click()
    }

     //clica no botão FINISH
     clicarFINISH() {
        cy.get(orderElements.clicarFINISH()).click()
    }

    // Verifica se foi direcionado a pagina de conclusão do pedido
    visualizarPonyExpress() {
        cy.get(orderElements.diretorioPonyExpress()).should('be.visible')
    }
}

export default OrderPage;