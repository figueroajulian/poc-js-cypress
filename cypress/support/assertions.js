export function assertABPageTitle() {
    cy.get('h3').should('contain', 'A/B Test');
}

export function assertNumberOfElements(expectedCount) {
    cy.get('#elements > button').should('have.length', expectedCount);
}