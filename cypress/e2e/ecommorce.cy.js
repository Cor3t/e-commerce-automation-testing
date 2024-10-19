const username = "standard_user"
const password = "secret_sauce"


describe('Authentication', () => {
  it('login', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
    cy.get('.submit-button').click()
  })
})

describe("Checking Product", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
    cy.get('.submit-button').click()
  })

  it('check we have more than one product', () => {
    cy.get('.inventory_item').should("have.length.at.least", 2)
  })

  it('check product has description', () => {
    cy.get('.inventory_item').first().find('.inventory_item_name ').click()
    cy.get('.inventory_details_desc').should("be.visible")
  })

})