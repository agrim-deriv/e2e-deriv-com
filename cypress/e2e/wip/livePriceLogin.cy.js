import "@testing-library/cypress/add-commands"

const username = Cypress.env("loginEmailProd")
const password = Cypress.env("loginPasswordProd")


function verify_buy_sell(action) {
  cy.get('.traders-hub-header__logo-wrapper a')
    .should('have.attr', 'href')
    .then(href => {
      cy.get('.traders-hub-header__logo-wrapper a')
        .should('have.attr', 'href', 'https://deriv.com/')
        .invoke('removeAttr', 'target') 
        .click();
      
      cy.findByRole("button", { name: "whatsapp icon", timeout: 30000 }).should("be.visible");
    });

  if (action === 'buy') {
    cy.findAllByRole('button', { name: 'Buy' }).first().click();
  } else if (action === 'sell') {
    cy.findAllByRole('button', { name: 'Sell' }).first().click();
  }

  cy.url().should('contain', 'traders-hub');
  loading_check();
}

function loading_check() {
  cy.findByTestId("dt_div_100_vh")
    .findByTestId("dt_popover_wrapper")
    .findByTestId("dt_balance_text_container")
    .should("be.visible", {
      timeout: 30000,
    });
}

function login () {
  cy.findByRole("button", { name: "Log in" }).click({ force: true })
  cy.findByLabelText("Email").type(username)
  cy.findByLabelText("Password").type(password, { log: false })
  cy.findByRole("button", { name: "Log in" }).click()
  loading_check()
}

describe("QATEST-1330 Live Price: Check on Buy/Sell buttons as a logged in user", () => {
  
  it("Should able to redirect to Trader's Hub upon clicking on buy button", () => {
    cy.c_visitResponsive(Cypress.env("derivAppProdUrl") ,{size:'desktop'})
    login()
    verify_buy_sell('buy')
    cy.get(".traders-hub-header__setting").click()
    cy.findByTestId("dt_logout_tab").click()
  })

  it("Should able to redirect to Trader's Hub upon clicking on sell button", () => {
    cy.c_visitResponsive(Cypress.env("derivAppProdUrl") ,{size:'desktop'})
    login()
    verify_buy_sell('sell')
    cy.get(".traders-hub-header__setting").click()
    cy.findByTestId("dt_logout_tab").click()
  })

  it("Should able to redirect to Trader's Hub upon clicking on buy button responsive", () => {
    cy.c_visitResponsive(Cypress.env("derivAppProdUrl"))
    login()
    verify_buy_sell('buy')
    cy.get('.dc-icon.header__mobile-drawer-icon').click()
    cy.contains('div', 'Log out').first().click();
  })

  it("Should able to redirect to Trader's Hub upon clicking on sell button responsive", () => {
    cy.c_visitResponsive(Cypress.env("derivAppProdUrl"))
    login()
    verify_buy_sell('sell')
    cy.get('.dc-icon.header__mobile-drawer-icon').click()
    cy.contains('div', 'Log out').first().click();
  })

})