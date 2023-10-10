import '@testing-library/cypress/add-commands'

describe('QATEST-1279 - Navigation Responsive - Menu items - EU and ROW (Including Trade Types)', () => {

    //Click through menu-items and ensure links are vaild and load the next page. 
    it('Generic menu items', () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')

      //Trade Types

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click();
      cy.findByRole('link', { name: 'CFDs trade type CFDs Trade with leverage and tight spreads for better returns on successful trades.' }).click()
      cy.findByRole('heading', { name: 'CFD trading', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Options trade type Options Earn a range of payouts without risking more than your initial stake.' }).should('not.exist')

      cy.findByRole('button', { name: 'Trade chevron' }).click();
      cy.findByRole('link', { name: 'Multipliers trade type Multipliers Get the upside of CFDs without the downside of losing more than your stake.' }).click()
      cy.findByRole('heading', { name: 'Multipliers', exact: true }).should('be.visible')

      //Trade Platforms

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click()
      cy.findByRole('link', { name: 'Deriv MT5 trading platform Deriv MT5 Trade on Deriv MT5, the all-in-one CFD trading platform.' }).click()
      cy.findByRole('img', { name: 'Deriv MT5', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click()
      cy.findByRole('link', { name: 'Deriv trader trading platform Deriv Trader A whole new trading experience on a powerful yet easy to use platform.' }).click()
      cy.findByRole('img', { name: 'Deriv Trader' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Deriv X trading paltform Deriv X A highly customisable and easy-to-use CFD trading platform.' }).should('not.exist')

      cy.findByRole('link', { name: 'Deriv EZ trading paltform Deriv EZ Trade on global markets from anywhere with our mobile-first CFD trading platform.' }).should('not.exist')

      cy.findByRole('link', { name: 'SmartTrader trading platform SmartTrader Trade the world’s markets with our popular user-friendly platform.' }).should('not.exist')

      cy.findByRole('link', { name: 'Deriv cTrader trading platform Deriv cTrader Advance trading, charting and technical analysis tools available for users.' }).should('not.exist')

      cy.findByRole('link', { name: 'Deriv GO mobile trading app Deriv GO Trade multipliers on forex, cryptocurrencies, and synthetic indices with our mobile app.' }).should('not.exist')

      cy.findByRole('link', { name: 'Deriv Bot Automated trading Deriv Bot Automated trading at your fingertips. No coding needed.' }).should('not.exist')

      cy.findByRole('link', { name: 'Binary bot for creating trading bot Binary Bot Our classic "drag-and-drop" tool for creating trading bots, featuring pop-up trading charts, for advanced users.' }).should('not.exist')

      cy.findByRole('img', { name: 'close menu' }).click()

      //Markets

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).click()
      cy.findByRole('heading', { name: 'Forex', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Synthetic indices Derived indices Enjoy trading asset prices derived from simulated markets.' }).click()
      cy.findByRole('heading', { name: 'Derived indices' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Stocks & indices Stocks & indices Predict broader market trends and diversify your risk with stocks & indices.' }).click()
      cy.findByRole('heading', { name: 'Stocks & indices', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Commodities Commodities Trade natural resources that are central to the world\'s economy.' }).click()
      cy.findByRole('heading', { name: 'Commodities', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Cryptocurrencies Cryptocurrencies Trade with leverage on the price movement of popular crypto-fiat pairs.' }).click()
      cy.findByRole('heading', { name: 'Cryptocurrencies', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Exchange-traded funds (ETFs) Exchange-traded funds (ETFs) Diversify your portfolio and enjoy low-cost intraday trading with ETFs.' }).should('not.exist')

      cy.findByRole('img', { name: 'close menu' }).click()

      //About us

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Who we are' }).click()
      cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Why choose us' }).click()
      cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Partnership programmes' }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Contact us' }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Careers' }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Deriv life' }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()


      //Resources
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Help centre' }).click()
      cy.findByRole('heading', { name: 'How can we help?' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByLabelText('Resources').findByRole('link', { name: 'Community' }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: "Traders’ tools" }).click();
      cy.findByRole('heading', { name: "Traders’ tools" }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Payment methods', exact: true }).click()
      cy.findByRole('heading', { name: 'Payment methods' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Deriv MT5 Signals' }).click()
      cy.findByRole('heading', { name: 'Deriv MT5 signals' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Status page' }).click()
      cy.findByRole('button', { name: 'Proceed' }).should('be.visible')

      //Legal

      cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Legal chevron' }).click()
      cy.findByRole('link', { name: 'Regulatory information' }).click()
      cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Legal chevron' }).click()
      cy.findByLabelText('Legal').findByRole('link', { name: 'Terms and conditions' }).click()
      cy.findByRole('heading', { name: 'Terms and conditions' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Legal chevron' }).click()
      cy.findByLabelText('Legal').findByRole('link', { name: 'Secure and responsible trading' }).click()
      cy.findByRole('heading', { name: 'Secure and responsible trading' }).should('be.visible')

      //Partners

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Partners chevron' }).click()
      cy.findByRole('link', { name: 'Deriv Prime' }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Partners chevron' }).click()
      cy.findByRole('link', { name: 'Affiliates' }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Partners chevron' }).click()
      cy.findByRole('link', { name: 'API', exact: true }).should('be.visible')
      cy.findByRole('img', { name: 'close menu' }).click()


    })

    //Click through menu-items and ensure links are vaild and load the next page. 
    it('ROW menu items', () => {

      //NB. The region switch doesn't work on the EU site at the moment.
      if (Cypress.env('skipROWTests') == false)
        {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
        //Trade Types
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Options trade type Options Earn a range of payouts without risking more than your initial stake.' }).click()
        cy.findByRole('heading', { name: 'What are digital options?' }).should('be.visible')

        //Trade Platforms

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Deriv X trading paltform Deriv X A highly customisable and easy-to-use CFD trading platform.' }).click()
        cy.findByRole('img', { name: 'Deriv X', exact: true }).should('be.visible')

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Deriv EZ trading paltform Deriv EZ Trade on global markets from anywhere with our mobile-first CFD trading platform.' }).click()
        cy.findByRole('img', { name: 'Deriv EZ', exact: true }).should('be.visible')

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'SmartTrader trading platform SmartTrader Trade the world’s markets with our popular user-friendly platform.' }).should('exist') //NB. Not always open, so don't click for now.
        cy.findByRole('img', { name: 'close menu' }).click()
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'small') //NB. Elements often disappear at this stage, so do a page refresh as a workaorund. The new HK site should overcome this, so it's not worth putting much effort in here now.

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Deriv cTrader trading platform Deriv cTrader Advance trading, charting and technical analysis tools available for users.' }).click()
        cy.findByRole('img', { name: '_t_Deriv ctrader logo_t_' }).should('be.visible')

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Deriv GO mobile trading app Deriv GO Trade multipliers on forex, cryptocurrencies, and synthetic indices with our mobile app.' }).click()
        cy.findByRole('img', { name: 'Deriv Go', exact: true }).should('be.visible')

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Deriv Bot Automated trading Deriv Bot Automated trading at your fingertips. No coding needed.' }).click()
        cy.findByRole('img', { name: 'Deriv Bot' }).should('be.visible')

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Binary bot for creating trading bot Binary Bot Our classic "drag-and-drop" tool for creating trading bots, featuring pop-up trading charts, for advanced users.' }).should('exist') //NB. Not always open, so don't click for now.
        cy.findByRole('img', { name: 'close menu' }).click()

        //Markets
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Exchange-traded funds (ETFs) Exchange-traded funds (ETFs) Diversify your portfolio and enjoy low-cost intraday trading with ETFs.' }).click()
        cy.findByRole('heading', { name: 'Exchange-traded funds' }).should('be.visible')

        //Partners
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Partners chevron' }).click()
        cy.findByRole('link', { name: 'Deriv Prime' }).should('be.visible')
        cy.findByRole('img', { name: 'close menu' }).click()
  
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Partners chevron' }).click()
        cy.findByRole('link', { name: 'Affiliates and IBs' }).should('be.visible')
        cy.findByRole('img', { name: 'close menu' }).click()

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Partners chevron' }).click()
        cy.findByRole('link', { name: 'Payment agents' }).should('be.visible')
        cy.findByRole('img', { name: 'close menu' }).click()
  
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Partners chevron' }).click()
        cy.findByRole('link', { name: 'API', exact: true }).should('be.visible')
        cy.findByRole('img', { name: 'close menu' }).click()

        }

    })
})

describe('QATEST-1274 - Navigation Responsive - Open/Close Menu', () => {
    beforeEach(() => {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
    })

    it('Validate hamburger menu operation', () => {

      //Click on the hamburger menu, click on the X to close and the sub menuitems should no longer be visible (checking for the visibity of the Trade menu item should be good enough for this)
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('img', { name: 'close menu' }).click()
      cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')

      //Click on the hamburger menu, click on the EN link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByText('EN', { exact: true }).click()
      cy.findByText('English').click()
      cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')

      //Click on the hamburger menu, click on the Login link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Log in' }).should('be.visible')

    })
})

describe('Validate Footer and Popup Icons', () => {
    beforeEach(() => {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
    })
    it('Validate footer exists', () => {
      cy.get('footer').should('exist')
    })
  
    it('Validate WhatsApp is available', () => {
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible')
    })
  
    //TODO find out why chat isn't popping up.
    // it('Validate Chat is available', () => {
    //   cy.findByRole('button', { name: 'livechat icon' }).should('be.visible')
    // })
})

describe('QATEST-1453 - Validate Spanish Language Change', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))
    
  })

  it('Select Spanish and check with header changed', () => {
    cy.findByText('EN', { exact: true }).click()
    cy.findByText('Español').click()
    cy.findByRole('heading', { name: 'Un bróker, innumerables oportunidades de operación' })
  })
})

describe('Validate Hero banner message', () => {
  
  it('QATEST-1310 - ROW', () => {
    if (Cypress.env('skipROWTests') == false)
    {
      //TODO - Find out what should be different here otherwise, repeating the same tests seems unnecessary
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      cy.findByTestId('typewriter-wrapper').findByText('For').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Cry').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Sto').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Com').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Der').should('be.visible')
      cy.findByLabelText('create free demo account').click()
      cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
    }      
  })

  it('QATEST-1315 - EU', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))

    cy.findByTestId('typewriter-wrapper').findByText('For').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Cry').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Sto').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Com').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Der').should('be.visible')
    cy.findByLabelText('create free demo account').click()
    cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
  })



})
