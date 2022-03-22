class OrderElements {
  
    diretorioOrder = () => { return '#inventory_container' }

    clicarADD = () => { return '#add-to-cart-sauce-labs-backpack' }
    

    clicarCART = () => { return '#shopping_cart_container' }

    clicarCHECKOUT = () => { return '#checkout' }

    get inserirNome() {
        return cy.get('#first-name').type('UOL');
    }

    get inserirSobrenome() {
        return cy.get('#last-name').type('EDTech');
    }

    get inserirCEP() {
        return cy.get('#postal-code').type('01202-900');
    }

    clicarCONTINUE = () => { return '#continue' }

    clicarFINISH = () => { return '#finish' }

    diretorioPonyExpress = () => { return '.pony_express' }


    get inputLogin() {
        return cy.get('#user-name').type('standard_user');
    }

    get inputSenha() {
        return cy.get('#password').type('secret_sauce')
    }

  
    clicarBotaoLogin = () => { return '.btn_action' }

    diretorioInventario = () => { return '#inventory_container' }


    
  }
  
  export default OrderElements;