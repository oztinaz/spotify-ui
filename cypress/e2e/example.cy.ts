// https://docs.cypress.io/api/introduction/api.html

describe('Hello message', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('div', 'Hello, World!')
  })
})
