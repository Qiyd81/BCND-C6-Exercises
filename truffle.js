var HDWalletProvider = require("truffle-hdwallet-provider");

// Be sure to match this mnemonic with that in Ganache!
// var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
var mnemonic = "enact gym uncle motion dutch deliver enrich luxury occur spray funny blossom";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545/", 0, 10);
      },
      network_id: '*',
      gas: 9999999
    }
  }
};