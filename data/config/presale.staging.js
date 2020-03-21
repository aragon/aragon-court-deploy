const { staging: { agent, tokenManager, voting } } = require('./ANDAO')

const START_DATE = Math.floor(new Date() / 1000 + 600).toString()         // 10 minutes from now

module.exports = {
  infra: {
    ens:              '0xfe03625ea880a8cba336f9b5ad6e15b0a3b5a939',       // Staging ENS instance
    daoFactory:       '0xf959e8953e2fe03782a7b86a7a5d948cb511ef5d',       // DAO factory used for the templates in Staging
    registrar:        '0xa2e76aa249e3f52ea94c175662adadf27185484a'        // Staging aragonID
  },
  instance: {
    owner:            agent,                                              // Agent of AN DAO Staging
    id:               'templates-externally-owned-presale-bonding-curve', // ID of the template to be registered in aragon ID
    collateralToken:  '0xd6257606740DE4A457B97D5DD469021ED72b6Ae7',       // ANT
    bondedToken:      '0xae83b8A9983b934Ebed4167BfDC4170d2A1E3D76',       // ANJ
    period:           '86400',                                            // Presale period will last 1 day, bonding curve will start right after that
    exchangeRate:     '100000000',                                        // Presale exchange rate 1 ANT = 100 ANJ
    openDate:         START_DATE,                                         // Presale will start in 10 minutes from now
    beneficiaryPct:   '200000',                                           // 20% of the generated ANJ will be minted for the owner
    reserveRatio:     '33333',                                            // Bonding curve reserve ratio of 33%, also used to compute the virtual balance
    batchBlocks:      '1',                                                // Market maker batch size
    slippage:         '100000000000000000'                                // TODO
  },
  aragonNetworkDAO: {
    voting,
    tokenManager,
  },
  wrapper: {
    owner:            agent,                                              // Agent of AN DAO Staging (short)
    registry:         '0x3497b2F7eEB7f1BeEFb044c6DA90110C4D6d5C4E',       // Court's Jurors Registry instance on Staging
    presale:          '0x373e5c71B567Ae033C4d9912eFE771bE340369A1',       // Fundraising presale instance on Staging
    uniswap:          '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36',       // Uniswap Factory address on Rinkeby
  }
}
