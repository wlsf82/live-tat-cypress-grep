describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders a header (with img and h1) & 5 cards with img, h2, and anchor', { tags: ['@home', '@smoke']}, () => {
    cy.get('.header img').should('be.visible')
    cy.get('.header h1').should('be.visible')

    cy.get('.card').should('have.length', 5)
    const cardsIndexes = [0, 1, 2, 3, 4]
    cardsIndexes.forEach(index => {
      cy.get('.card')
        .eq(index)
        .as('card')
        .find('img')
        .should('be.visible')
      cy.get('@card')
        .find('h2')
        .should('be.visible')
      cy.get('@card')
        .find('a')
        .should('be.visible')
        .and('have.text', 'Learn more')
    })
  })
})
