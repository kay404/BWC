var Client = require('bitcore-wallet-client/index').default
var config = require('./config')
var fs = require('fs')
var client = new Client({
  baseUrl: config.BWS_URL,
  verbose: false,
})
// 获取钱包信息
var string = JSON.parse(fs.readFileSync('wallet.dat'))
client.fromString(string)
client.getStatus({}, function (err, result) {
  if (err) {
    console.log('ERROR:', err)
    return
  }
  console.log(result)
})

// 获取钱包余额
client.getBalance({}, function (err, result) {
  if (err) {
    console.log('ERROR: ', err);
  }
  console.log(result)
})