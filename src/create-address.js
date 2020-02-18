var Client = require('bitcore-wallet-client/index').default
var config = require('./config')
var fs = require('fs')
var client = new Client({
  baseUrl: config.BWS_URL,
  verbose: false,
})
// 为钱包创建新的地址
var walletData = JSON.parse(fs.readFileSync('wallet.dat'))
client.fromString(walletData)
client.createAddress({}, function (err, addr) {
  if (err) {
    console.log('Create addresss error: ', err)
    return
  }
  console.log(addr)
})