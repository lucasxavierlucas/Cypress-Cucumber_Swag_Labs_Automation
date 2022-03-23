Feature: Login site Swag Labs

    Scenario: Validar usuario Standard 
        Given acesso o site SwagLabs
        When insiro o login do usuario
        And insiro a senha do usuario
        And clico no botão LOGGIN
        Then devo ser direcionado ao inventário de produtos

    Scenario: Validar conclusão de pedido
        Given acesso o site SwagLabs
        When insiro o login do usuario
        And insiro a senha do usuario
        And clico no botão LOGGIN
        Then devo ser direcionado ao inventário de produtos
        Given clico em ADD TO CART
        When clico no CART
        And clico em CHECKOUT
        And insiro meu nome
        And insiro meu sobrenome
        And insiro meu CEP
        And clico em CONTINUE
        And clico em FINISH
        Then devo ser direcionado a pagina de conclusão do pedido
