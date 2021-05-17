describe('Edit destinations page', () => {
  let destination

  beforeEach(() => {
    destination = Math.floor(Math.random() * 15 + 1)
    cy.visit(`/destinations/${destination}/edit`)
  })

  it("doesn't update if minimum name and description aren't met", { tags: ['@edit-destination', '@critical']}, () => {
    cy.get('form #destination_name')
      .should('be.visible')
      .clear()
      .type('ab')
    cy.get('form #destination_description')
      .should('be.visible')
      .clear()
      .type('Abcdefghi')

    cy.get('input[type="submit"]').click()

    cy.get('.field_with_errors input').should('have.length', 2)
  })

  it('successfully updates destination name and description', { tags: ['@edit-destination', '@smoke', '@critical']}, () => {
    const newName = `Name ${Date.now()}`
    const newDesc = `Description ${Date.now()}`
    cy.get('form #destination_name')
      .should('be.visible')
      .clear()
      .type(newName)
    cy.get('form #destination_description')
      .should('be.visible')
      .clear()
      .type(newDesc)

    cy.get('input[type="submit"]').click()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/destinations/${destination}`)
    cy.get('h2').should('have.text', newName)
    cy.get('p').should('have.text', newDesc)
  })
})
