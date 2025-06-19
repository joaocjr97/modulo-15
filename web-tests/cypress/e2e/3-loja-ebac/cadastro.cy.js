/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });


    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('alo@Alo15')
        cy.wait(2000)  //Para o robô esperar
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.wait(4000)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });

        // it - Significa que é um teste. Quando têm-se o "only" após, quer dizer que estamos apontando esse teste apenas.
    it('Deve completar o cadastro com sucesso - Usando variáveis', () => {

        //Aqui, estou usando variáveis, que são palavras simples, que terão funções atribuídas.
        var nome  = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome = faker.person.lastName()
        //Com isso, posso apenas usar essas palavras depois, que o faker vai funcionar.

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('alo@Alo15')
        cy.wait(2000)  //Para o robô esperar
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.wait(4000)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
    it.only('Deve completar o cadastro com sucesso - Usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), 'alo@Alo15', faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-message').should('exist')
    });
});