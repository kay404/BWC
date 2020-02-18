
var Client = require('bitcore-wallet-client/index').default
var config = require('./config')
var fs = require('fs')
var client = new Client({
  baseUrl: config.BWS_URL,
  verbose: false,
})

// 创建钱包并导出钱包信息
var keys = Client.Key.create();
client.credentials = keys.createCredentials('', { coin: config.coinType, network: config.networkType, account: 0, n: 1 });
client.createWallet('mywallet', '', 1, 1, {
  network: config.networkType
}, function(err, secret) {
  if (err) {
    console.log('Create wallet error: ',err);
    return
    };
    console.log('------ Wallet Successfully Created ----------');
    fs.writeFileSync('wallet.dat', client.toString());
    fs.writeFileSync('walletkey.dat', JSON.stringify(keys))
})
