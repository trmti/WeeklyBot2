const ethers = require('ethers');
/*
  myWallet: 自分のウォレットアドレス
  tokenA: スワップ元のトークン
  tokenB: スワップ先のトークン
*/
module.exports.addresses = {
  myWallet: '0xE4Fd0Df3106da1123C6c0B7b3B6AB49722aF08eE', // 自分のWalletアドレス
  tokenA: '0x89Af13A10b32F1b2f8d1588f93027F69B6F4E27e',
  tokenB: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
};

module.exports.secretKey =
  'd0ac52f0f04162e04c36189d2b89727f46a309e77b66462418dc05c5cfa6f3ef'; // 秘密鍵

module.exports.gasPrice = ethers.utils.parseUnits('5', 'gwei').toString();

module.exports.minTokenPrice = 0; // token価格(USD)がこの値を下回ったとき、実行中止(設定しない場合は「0」を入力)
module.exports.nodes = [
  'https://restless-spring-wildflower.bsc.discover.quiknode.pro/41bcc6bd92c8da817de28a078d42e0ab8a80b6c1/',
  'https://bsc-dataseed.binance.org',
];
