const { defineConfig } = require('cypress')
require('dotenv').config()


//const gViewPortSize = {small: 'phone-xr', large: 'macbook-16'} //TODO Use enum

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    projectId: '16kef2',
    setupNodeEvents(on, config) { },
    //baseUrl: 'https://deriv.com',
    //baseUrl: 'https://deriv-com-v2.pages.dev/',
    baseUrl: 'https://staging.deriv.com', 
    defaultCommandTimeout: 10000,
    supportFile: "cypress/support/e2e.js",    
  },
  env: {
    RegionEU: '/?region=at',
    RegionROW: '/?region=id',
    RegionDIEL: '/?region=za',
    skipROWTests: false,
    email: 'test@example.com',
    viewPortSize: 'small',
    loginEmail: process.env.DERIV_LOGIN,
    loginPassword: process.env.DERIV_PASSWORD,
    loginEmailProd: process.env.E2E_DERIV_LOGIN_PROD,
    loginPasswordProd: process.env.E2E_DERIV_PASSWORD_PROD,
    derivAppUrl: "https://staging-app.deriv.com",
    derivAppProdUrl: "https://app.deriv.com",
    configServer: process.env.CONFIG_SERVER,
    configAppId: process.env.CONFIG_APPID,
    emailUser: process.env.AUTH_EMAIL_USER,
    emailPassword: process.env.AUTH_EMAIL_PASSWORD,
    event_email_url: process.env.EVENTS_EMAIL,
    emailVerificationCode : process.env.EMAIL_VERIFICATION_CODE,
    country_of_residence: process.env.COUNTRY_OF_RESIDENCE,
    citizenship: process.env.CITIZENSHIP,
    user_password: process.env.USERPASSWORD,
    diel_country_list: ['Ecuador', 'South Africa', 'Brazil', 'Sri Lanka', 'Uruguay', 'Switzerland']
  },
  retries: {
    "runMode": 2,
    "openMode": 0
  },
  externalUrls: {
    derivlifeURL:   'https://derivlife.com/',
    derivBlogURL:   'https://blog.deriv.com',
    smartTraderURL: 'https://smarttrader.deriv.com/en/trading',
    loginURL:       'https://oauth.deriv.com/',
    stagingderivURL:'https://staging.deriv.com/',
    derivURL:       'https://deriv.com/',
    binaryBotURL:   'https://bot.deriv.com/?l=en',
  },

  externalSocialUrls: {
    facebookEu: 'https://www.facebook.com/DerivEU',
    instagramEu: 'https://www.instagram.com/deriv_eu/',
    twitterEu: 'https://twitter.com/deriv_eu/',
    facebookRow: 'https://www.facebook.com/derivdotcom',
    instagramRow: 'https://www.instagram.com/deriv_official',
    youtubeDeriv: 'https://www.youtube.com/@deriv',
    linkedInDeriv: 'https://www.linkedin.com/company/derivdotcom/',
    twitterRow: 'https://twitter.com/derivdotcom/',
  },

  appMarketUrl: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.deriv.app',
    appStore: 'https://apps.apple.com/my/app/deriv-go-online-trading-app/',
    appGallery: 'https://appgallery.huawei.com/app/C103801913',
  },
})
