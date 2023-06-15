describe('login', () => {
  it('login as user', () => {

    const startUrl = Cypress.config().baseUrl;

    cy.visit(startUrl)

    cy.fixture('user').then((user) => {
      cy.get('#username').type(user.pro.username)
      cy.get('#password').type(user.pro.password)
    })

    cy.get('a[data-cy="trigger-login"]').click()

    // cy.contains('Create new project')
    cy.contains('www.koality.io (europe)')
  })
})
