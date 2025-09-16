import { Dashboard } from "../support/POM"
const button = new Dashboard()

const email = 'Admin'
const password = 'admin123'
Cypress.on('uncaught:exception', (err, runnable) => {
      // return false to prevent the test from failing
      return false;
    });
Cypress.Commands.add('login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type(email)
    cy.get('input[name="password"]').type(password)
    button.submitButton().contains('Login').click()
    cy.contains('Dashboard', { timeout: 10000 }).should('be.visible')
})

