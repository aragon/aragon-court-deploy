const abi = require('web3-eth-abi')

const decodeEvents = ({ receipt }, contractAbi, eventName) => {
  const eventAbi = contractAbi.filter(abi => abi.name === eventName && abi.type === 'event')[0]
  const eventSignature = abi.encodeEventSignature(eventAbi)
  const eventLogs = receipt.rawLogs.filter(l => l.topics[0] === eventSignature)
  return eventLogs.map(log => {
    log.event = eventAbi.name
    log.args = abi.decodeLog(eventAbi.inputs, log.data, log.topics.slice(1))
    return log
  })
}

const getInstalledApps = (receipt, appId, kernel) => {
  const events = decodeEvents(receipt, kernel.abi, 'NewAppProxy')
  const appEvents = events.filter(e => e.args.appId === appId)
  const installedAddresses = appEvents.map(e => e.args.proxy)
  return installedAddresses
}

const getInstalledAppsById = (receipt, appIds, kernel) => {
  return Object.keys(appIds).reduce((apps, appName) => {
    apps[appName] = getInstalledApps(receipt, appIds[appName], kernel)
    return apps
  }, {})
}

module.exports = {
  decodeEvents,
  getInstalledApps,
  getInstalledAppsById
}
