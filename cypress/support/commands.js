Cypress.Commands.add('open', () => {
    cy.visit('/');
    cy.contains('Books list').should('be.visible');
}),

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click();
}),

Cypress.Commands.add('visible', (text, command) => {
    cy.contains(text).should(command);
}),

Cypress.Commands.add('login', (empty_1, email, empty_2, password) => {
    cy.contains('Books list').should('be.visible'); 
    cy.get('.ml-auto > .ml-2').click();
    cy.get(empty_1).type(email);
    cy.get(empty_2).type(password);
    cy.get('form > .ml-2').click();
}),

Cypress.Commands.add('write', (title, text_1, description, text_2, authors, text_3) => {
    cy.get(title).type(text_1);
    cy.get(description).type(text_2);
    cy.get(authors).type(text_3);
})