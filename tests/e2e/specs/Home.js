// https://docs.cypress.io/api/introduction/api.html

describe('Home.vue', () => {

	it('Opens root url', () => {
		cy.visit('/')
		cy.contains('h3', 'Who are you?')
	})

	it('Is able to type name', () => {
		cy.visit('/')
		cy.get('input').first().type('Cypress')
		cy.contains('h4', 'Good, good...')
	})

	it('Can set profile', () => {
		cy.visit('/')
		cy.get('input').first().type('Cypress')
		cy.get('img').first().click()
		cy.contains('h3', 'The Force is strong with you')
	})

})
