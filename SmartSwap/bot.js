const ethers = require('ethers');
const abi = require('./bot.json');
const { swapAllToken } = require('./swap.js');
const { myWallet, secretKey, nodes } = require('../BasicConfig.json');
const { tokens } = require('./config.json');

const provider = new ethers.providers.JsonRpcProvider(nodes[1], {
  name: 'binance',
  chainId: 0x38,
});

const wallet = new ethers.Wallet(secretKey);
const account = wallet.connect(provider);

const contract = new ethers.Contract(tokens.tokenA, abi, provider);
const filter = contract.filters.Transfer(null, myWallet);

swapAllToken(account, tokens.tokenA, tokens.tokenB);
contract.on(filter, () => {
  console.log('You got New asset!');
});
