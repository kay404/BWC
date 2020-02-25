var Client = require('bitcore-wallet-client/index').default
var config = require('./config')
var fs = require('fs')
var client = new Client({
  baseUrl: config.BWS_URL,
  verbose: false,
})
// 创建钱包并导出钱包信息
var mnemonic = 'soup wrist sleep bike short afraid year solve real hawk glow eager'

var key = Client.Key.fromMnemonic(mnemonic);
var c = key.createCredentials(null, {
  coin: config.coinType,
  network: 'testnet',
  account: 0,
  n: 1
})
// console.log(key.derive('', 'm/0/1').privateKey.toWIF())
client.fromString(c);
client.openWallet({}, (err, status) => {
  if (err) {
    console.log('Open wallet error: ', err)
    return
  }
  console.log(status)
})
