describe('Tags page', () => {
  beforeEach(() => {
    cy.visit(`/tags/${Math.floor(Math.random() * 5 + 1)}`)
  })

  it('renders 3 cards', { tags: '@tags'}, () => {
    cy.get('.card').should('have.length', 3)
  })
})
