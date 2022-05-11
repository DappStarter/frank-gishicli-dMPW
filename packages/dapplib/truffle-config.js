require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid narrow fortune stone stool regret soap artwork gloom globe equal gauge'; 
let testAccounts = [
"0x868cfe403f67bebe63b176cb9dc9a37e0b5f346364fae8dc0318dce9ea922d65",
"0x4a86bdb23f5e747fb6810e8ecaf6d0b67f6b2313b257f20d4d379eaf58e0f642",
"0x9faa74ba1519bde173566810a13a79b131e1a6f91808fae839508e3d383e5191",
"0x5a55c62a9b8be0b28a21fde48e0b1f4677fa44535ca219d564920bdc0ca0ffc0",
"0x319ec627630c319af8a642b6a1a84d728a159fbce26710959153a9bec7d8400d",
"0xc49c29ce5d7677e09664dec906839727adc4f7e9cfadd97c696dc9651e19b21e",
"0xf9102d9933aa92f0f3492acd8b8b93273576aa8a1209495685059e2ffaef755e",
"0x83a6a8c4446c51d36b54486812d83468fb675c49b94274df0debf3e0b9a6ad97",
"0x8a515fc9b337bb195a5945b630827930d138218cb2c61931b3752dd64e0adab8",
"0x3da533bb31db2efae9fd7de1f7d5779dec7d3f707b48c7b97bec525195b0d36b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


