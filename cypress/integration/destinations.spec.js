describe('Destinations page', () => {
  beforeEach(() => {
    cy.visit(`/destinations/${Math.floor(Math.random() * 15 + 1)}`)
  })

  it('renders an img, h2, p, and anchor (Edit)', { tags: '@destinations'}, () => {
    cy.get('.destination img').should('be.visible')
    cy.get('.destination h2').should('be.visible')
    cy.get('.destination p').should('be.visible')
    cy.get('.destination a')
      .should('be.visible')
      .and('have.text', 'Edit')
  })
})
