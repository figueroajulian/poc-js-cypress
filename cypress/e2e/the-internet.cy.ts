import { pageInternetHome } from '../pages/pageInternetHome';
import { pageAddRemove } from '../pages/pageAddRemoveElements';
import * as assertions from '../support/assertions';

describe('The Internet', () =>{

    beforeEach(() => {
        cy.visit('.')
    })

    it('Verify title into A/B page', () => {
        pageInternetHome.getInto('A/B Testing');
        assertions.assertABPageTitle();
    })

    it('Verify add elements', () => {
        pageInternetHome.getInto('Add/Remove Elements');
        pageAddRemove.addNewElement();
        assertions.assertNumberOfElements(1)
    })

    it('Verify non-existency of elements after adding and removing them', () => {
        pageInternetHome.getInto('Add/Remove Elements');
        pageAddRemove
            .addNewElement()
            .deleteNewElement();
        assertions.assertNumberOfElements(0);
    })

})