describe('Edit destinations page', () => {
  let destination

  beforeEach(() => {
    destination = Math.floor(Math.random() * 15 + 1)
    cy.visit(`/destinations/${destination}/edit`)
  })

  it("doesn't update if minimum name and description aren't met", { tags: ['@edit-destination', '@critical']}, () => {
    const destination = {
      name: 'Ab',
      description: 'Abcdefghi'
    }

    cy.fillFormAndSubmit(destination)

    cy.get('.field_with_errors input').should('have.length', 2)
  })

  it('successfully updates destination name and description', { tags: ['@edit-destination', '@smoke', '@critical']}, () => {
    const destinationUpdated = {
      name: `Name ${Date.now()}`,
      description: `Description ${Date.now()}`
    }

    cy.fillFormAndSubmit(destinationUpdated)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/destinations/${destination}`)
    cy.get('h2').should('have.text', destinationUpdated.name)
    cy.get('p').should('have.text', destinationUpdated.description)
  })
})
