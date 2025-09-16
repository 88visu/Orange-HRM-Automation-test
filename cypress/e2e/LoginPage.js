import { Dashboard } from "../support/POM"
const button = new Dashboard()

describe('OrangeHRM Demo – Login', () => {
    const username = 'Admin'
    const oldPassword = 'admin123'

    it('Login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(oldPassword)
        button.submitButton().contains('Login').click()
        cy.contains('Dashboard', { timeout: 10000 }).should('be.visible')
    })
})