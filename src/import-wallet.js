
var Client = require('bitcore-wallet-client/index').default
var config = require('./config')
var fs = require('fs')
var client = new Client({
  baseUrl: config.BWS_URL,
  verbose: false,
})

// import walelt
var walletData = JSON.parse(fs.readFileSync('wallet.dat'))
client.fromString(walletData)
console.log(client)

// import wallet keys
var keyData = JSON.parse(fs.readFileSync('walletkey.dat'))
var keys = Client.Key.fromObj(keyData)
console.log(keys)