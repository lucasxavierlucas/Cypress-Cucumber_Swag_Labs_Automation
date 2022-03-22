Feature: Finalizar Pedido

    Scenario: Validar pedido Sauce Labs Backpack
        Given estou na tela PRODUCTS
        When clico em ADD TO CART
        And clico no CART
        And clico em CHECKOUT
        And insiro meu nome
        And insiro meu sobrenome
        And insiro meu CEP
        And clico em CONTINUE
        And clico em FINISH
        Then devo ser direcionado a pagina de conclusão do pedido


