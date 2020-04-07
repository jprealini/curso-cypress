import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";

Given('I visit {string}', (url) => {
    cy.visit('/');
})

Then('I should see the Google Logo', () => {
    cy.get('#hplogo').should('be.visible')
})

// Given(/^I visit "([^"]*)"$/, (url) => {
//     cy.visit(url);
// })

// Then(/^I should see the Google Logo$/, () => {
//     cy.get('#hplogo').should('be.visible')
// })



