class pageObjectInternetHome {
    private accessButton;

    constructor(){
        this.accessButton = '#content > ul > li';
    }

    getInto(section){
        cy.get(this.accessButton)
            .contains(section)
            .click();
    }
}

const pageInternetHome = new pageObjectInternetHome;
export { pageInternetHome }