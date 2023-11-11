import { rmAPI } from "../api/integration"

describe('Rick & Morty API', () => {

    let response;

    beforeEach(() => {
        rmAPI.getChar(232).then((res) => {
            response = res;
            expect(response.status).to.eq(200);
        });
    })

    it('Verify Morty Smith data', () => {
        expect(response.body.name).to.eq('Morty Smith');
    });

    it('Verify that Morty Smith episodes exist and are accesibles', () => {
        cy.wrap(response.body.episode).each((episodeUrl) => {
            cy.request(episodeUrl).then((episodeResponse) => {
                expect(episodeResponse.status).to.eq(200);
                expect(episodeResponse.body).to.have.property('name');
                expect(episodeResponse.body).to.have.property('air_date');
            });
        });
    })

});

describe('Rick & Morty API - Unexistent character',()=>{

    let response;

    beforeEach(() => {
        rmAPI.getChar(999999).then((res) => {
            response = res;
        });
    })

    it('Verify api responses when the character does not exist', () => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.eq('Character not found');
    });

});