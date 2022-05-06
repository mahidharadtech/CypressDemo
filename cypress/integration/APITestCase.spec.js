const { expect } = require("chai");


import { getUsers } from "../Route/schema/getUsers";



describe('Api testing', () => {
    it('All Users - GET', () => {
        cy.request('https://reqres.in/api/users?page=2').as('Request');
        cy.get('@Request').should((response) => {
        expect(response.status).to.eq(200)
        assert.equal(response.body.page,'2')
        assert.equal(response.body.per_page,'6')
        assert.equal(response.body.total,'12')
        assert.equal(response.body.total_pages,'2')
    
        });
    });
    it('GET Single User', () => {
        cy.request('https://reqres.in/api/users/2').as('Request')
        .fixture('/user')
        .then((userdata) => {
        cy.get('@Request').should((response) => {
        expect(response.status).to.eq(200)
        assert.equal(response.body.data.first_name, 'Janet');
        assert.equal(response.body.data.last_name,'Weaver')
        assert.equal(response.body.data.email,'janet.weaver@reqres.in')
        });
    })
});
});
