/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json') //importei a massa de dados de fixtures/perfil.json

describe('Funcionalidade: Login', () => {

        beforeEach(() => {  //serve para rodar algo ou acessar algo antes de cada teste
            cy.visit('minha-conta')
        });

        afterEach(() => {  //serve para fazer algo após cada teste. Neste caso, um print
            cy.screenshot()
        });

    it('Deve fazer login com sucesso', () => { 
        cy.get('#username').type('joao.teste@teste.com.br') //Login
        cy.get('#password').type('teste@123') //Senha
        cy.get('.woocommerce-form > .button').click() //Clicar no botão de Login

        //Utiliza-se Should('contain' , 'mensagem') para fazer uma asserção
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, joao.teste (não é joao.teste? Sair)')
    })
/
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gabrielly')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist') //esse método é rápido e virou meu favorito
    });

    it('Deve inserir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('joao.teste@teste.com.br')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve fazer login com sucesso, usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content').should('exist')
    });

    it('Deve fazer login com sucesso, usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, { log: false}) //Com o Log False, eu escondo meu login e senha, por privacidade.
            cy.get('#password').type(dados.senha, {log :false})
            cy.get('.woocommerce-form > .button').click()  
            cy.get('.woocommerce-MyAccount-content').should('exist')
        })
    });

    it('Deve fazer login com sucesso - Usando comandos customizados', () => {
        cy.login('joao.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, joao.teste (não é joao.teste? Sair)')
    });
})