
class LoginElements {

    get inputLogin() {
        return cy.get('#user-name').type('standard_user');
    }

    get inputSenha() {
        return cy.get('#password').type('secret_sauce')
    }

  
    clicarBotaoLogin = () => { return '.btn_action' }



    diretorioInventario = () => { return '#inventory_container' }

    
  }
  
  export default LoginElements;

  