class pageObjectAddRemoveElements {
    private addElement;
    private deleteElement;

    constructor(){
        this.addElement = '[onclick="addElement()"]';
        this.deleteElement = '[onclick="deleteElement()"]';
    }

    addNewElement(){
        cy.get(this.addElement).click();
        return this;
    }

    deleteNewElement(){
        cy.get(this.deleteElement).click();
    }
}

const pageAddRemove = new pageObjectAddRemoveElements;
export { pageAddRemove }