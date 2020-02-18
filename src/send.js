var Client = require('bitcore-wallet-client/index').default
var config = require('./config')
var fs = require('fs')
var client = new Client({
  baseUrl: config.BWS_URL,
  verbose: false,
})

// 导入钱包
var walletData = JSON.parse(fs.readFileSync('wallet.dat'))
client.fromString(walletData)

// 导入钱包相关私钥
var keyData = JSON.parse(fs.readFileSync('walletkey.dat'))
var keys = Client.Key.fromObj(keyData)

var toAddress = 'mzcjjp1hUormfUGn1h3Gh94FJHgeJ5ugbA'
var amount = 500000

var opts = {
  'outputs': [{
    'toAddress': toAddress,
    'amount': amount,
    'message': 'first transfer'
  }],
  message: ''
}

client.createTxProposal(opts, function (err, txp) {
  if (err) {
    console.log(err)
    return
  }
  console.log('\n createTxProposal:\n', txp)
  opts['txp'] = txp
  client.publishTxProposal(opts, function (err, txp) {
    if (err) {
      console.log(err)
      return
    }
    console.log('\n publishTxProposal:\n', txp)
    var rootPath = client.getRootPath()
    // console.log(rootPath)
    var sign = keys.sign(rootPath, txp)
    console.log(sign)
    client.pushSignatures(txp, sign, function (err, txp) {
      if (err) {
        console.log(err)
        return
      }
      client.broadcastTxProposal(txp, function (err, txp, memo) {
        if (err) {
          console.log(err);
          return
        }
        if (memo) {
          console.log(memo);
        }
        console.log("\n broadcastTxProposal:\n", txp)
      })      
    })
  })
})