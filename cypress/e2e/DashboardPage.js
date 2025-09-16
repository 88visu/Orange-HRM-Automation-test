
import { Dashboard } from "../support/POM"
const dashboard = new Dashboard()
describe('OrangeHRM Demo – Update Contact Details', () => {
    it('Update Contact Details', () => {
        cy.login()
        // Assuming user is already logged in manually or via previous test
        cy.contains('My Info').click()
        cy.contains('Contact Details').click()
        cy.get('h6').contains('Contact Details').should('be.visible')

        dashboard.addressInput().eq(0).clear().type('123 Test Street')
        dashboard.addressInput().eq(1).clear().type('Near Demo Park')
        dashboard.addressInput().eq(2).clear().type('Lucknow')
        dashboard.addressInput().eq(3).clear().type('UP')
        dashboard.addressInput().eq(4).clear().type('206016')

        cy.contains('Mobile')
            .parent()
            .parent()
            .find('input')
            .clear()
            .type('8840443795')

        cy.get('button').contains('Save').click()
    })
})