const { bigExp } = require('../../src/helpers/numbers')

const ONE_WEEK = 60 * 60 * 24 * 7

module.exports = {
  rpc: {
    tokens: [],                                                       // No tokens set for local env
  },
  staging: {
    owner:        undefined,                                          // Ownership will remain to the sender
    tokens: [
      {
        symbol:   'ANJ',
        address:  '0x5bC9BE34f98eB072696d63b5BE5D4d2F2C03d0AD',       // ANJ address in Staging
        period:   ONE_WEEK,                                           // The ANJ quota period lasts 1 week
        amount:   bigExp(200000, 18)                                  // Accounts will be allowed to withdraw 200000 ANJ per week maximum
      },
      {
        symbol:   'DAI',
        address:  '0x3AF6b2f907F0c55F279e0ED65751984E6cdC4a42',       // Fee token (DAI) address in Staging
        period:   ONE_WEEK,                                           // The fee token quota period lasts 1 week
        amount:   bigExp(10000, 18)                                   // Accounts will be allowed to withdraw 10000 DAI per week maximum
      }
    ]
  },
  ropsten: {
    owner:        undefined,                                          // Ownership will remain to the sender
    tokens: [
      {
        symbol:   'ANT',
        address:  '0x0cb95D9537c8Fb0C947eD48FDafc66A7b72EfC86',       // ANT address in Ropsten
        period:   ONE_WEEK,                                           // The ANT quota period lasts 1 week
        amount:   bigExp(1000, 18)                                    // Accounts will be allowed to withdraw 1000 ANT per week maximum
      },
      {
        symbol:   'DAI',
        address:  '0x4E1F48Db14D7E1ada090c42ffE15FF3024EEc8Bf',       // Fee token (DAI) address in Ropsten
        period:   ONE_WEEK,                                           // The fee token quota period lasts 1 week
        amount:   bigExp(10000, 18)                                   // Accounts will be allowed to withdraw 1000 ANT per week maximum
      }
    ]
  },
  rinkeby: {
    owner:        undefined,                                          // Ownership will remain to the sender
    tokens: [
      {
        symbol:   'ANT',
        address:  '0x8cf8196c14A654dc8Aceb3cbb3dDdfd16C2b652D',       // ANT address in Rinkeby
        period:   ONE_WEEK,                                           // The ANT quota period lasts 1 week
        amount:   bigExp(10000, 18)                                   // Accounts will be allowed to withdraw 10,000 ANT per week maximum
      },
      {
        symbol:   'DAI',
        address:  '0xe9A083D88Eed757B1d633321Ce0519F432c6284d',       // Fee token (DAI) address in Rinkeby
        period:   ONE_WEEK,                                           // The fee token quota period lasts 1 week
        amount:   bigExp(10000, 18)                                   // Accounts will be allowed to withdraw 10,000 DAI per week maximum
      }
    ]
  },
}
