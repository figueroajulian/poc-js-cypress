class rmClient {
    private urlBase;

    constructor() {
        this.urlBase = Cypress.config().baseUrlAPI;
    }

    getChar(id) {
        return cy.request({
            method: 'GET',
            url: this.urlBase + '/character/' + id,
            failOnStatusCode: false
        });
    }
}

const rmAPI = new rmClient;
export { rmAPI }