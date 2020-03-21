const { bn } = require('../../src/helpers/numbers')
const { rpc: { agent, tokenManager, voting } } = require('./ANDAO')

const TERM_DURATION = 60 * 10                                        // 10 minutes
const START_DATE = Math.floor(new Date() / 1000 + 2 * TERM_DURATION) // 20 minutes from now

module.exports = {
  owner:               agent,       // Set with an AN DAO deployed to Aragen
  bondedToken:         undefined,       // Set with the ANJ instance deployed to Aragen
  aragonNetworkDAO: {
    voting,
    tokenManager,
  },
  court:               undefined,       // Set with Court's controller instance on rpc
  disputeManager:      undefined,       // Original Dispute Manager
  oldRegistry:         undefined,       // Court's old Jurors Registry instance on rpc
  newRegistry:         undefined,       // Court's Jurors Registry instance on rpc
  migrator:            undefined,       // Address of the migrator contract
  firstTermStartTime:  bn(START_DATE),  // First term start timestamp in seconds
}
