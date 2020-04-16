import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";

Given('I visit the website', () => {
    cy.visit('/wp-admin')
});

When('I login with {string} and {string}', (username,password) => {
    cy.wait(500)
    cy.get('#user_login').focus().type(username)    
    cy.get('#user_pass').focus().type(password)
    cy.get('#wp-submit').click()
});

Then('I should log in', () => {
    cy.url().should('include','wp-admin')
});

Then('I should not log in', () => {
    cy.get('#login_error').contains('no es correcta')
});