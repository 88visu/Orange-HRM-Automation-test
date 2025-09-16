import { Dashboard } from "../support/POM"
const button = new Dashboard()
const oldPassword = 'admin123';
const newPassword = 'Admin@1234';

describe('OrangeHRM Demo – Change Passward', () => {

    it('Change Passward', () => {
        cy.login()
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Change Password').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(oldPassword)
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(newPassword)
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(newPassword)
        button.submitButton().contains('Save').click();
        // Assert success message
        cy.contains('Success',).should('be.visible')
    })
})


