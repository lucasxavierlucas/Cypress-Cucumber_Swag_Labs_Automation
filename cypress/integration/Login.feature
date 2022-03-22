Feature: Login site Swag Labs

    Scenario: Validar usuario Standard
        Given acesso o site SwagLabs
        When insiro o login do usuario
        When insiro a senha do usuario
        And clico no botão LOGGIN
        Then devo ser direcionado ao inventário de produtos
