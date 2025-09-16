describe('OrangeHRM Demo – Logout', () => {
    it('Logout', () => {
        cy.login()
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
        cy.url().should('include', '/auth/login')
    })
})