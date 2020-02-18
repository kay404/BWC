# BWC
[bitcore-wallet-client](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-wallet-client) communicates with [bitcore-wallet-service](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-wallet-service) using the REST API.

## Install
```
npm install bitcore-wallet-client 
```

## Example

1. [create wallet](./src/create-wallet.js)
```
API.createWallet(walletName, copayerName, m, n, opts, opts.network, opts.walletPrivKey, opts.id, opts.withMnemonics, cb)
```
walletName: String, 创建的钱包名称。

copayerName: String, 创建钱包的人，即钱包的拥有者。

m: Number, 该钱包拥有者个数。若为1，则是个人钱包；若大于1，则是共享钱包，需要多重签名。

n: Number, 与m对应，不能大于m，指定需要签名的个数。若是个人钱包，则为1。

opts: 可选参数，它是一个对象，包含的字断如下：

opts.network: string, 钱包连接的网络类型，支持正式网络和测试网络，分别表示为：livenet、testnet。

opts.walletPrivKey: 钱包私钥，可以不用指定，会随机生成。

opts.id: String, 钱包ID，可以不用指定，会自动生成。

opts.singleAddress: bool, 使用单一地址，默认为false。

cb: 回调方法。该方法是没有返回值的，响应的数据是通过callba回掉进行传递。


2. [import wallet](./src/import-wallet.js)

3. [get wallet status and balance](./src/get-wallet-status.js)

4. [create addresss](./src/create-address.js)

5. [send coin to address](./src/send.js)