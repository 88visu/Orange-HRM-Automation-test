export class Dashboard {
    addressInput() {
        return cy.get('form.oxd-form input')
    }
    submitButton() {
        return cy.get('button[type="submit"]')
    }
}

