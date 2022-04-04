require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stomach decrease place equip hockey clog slot gather'; 
let testAccounts = [
"0x0c9db62ffcec64ade25e6b3048e3a7000e33f17682d88823cecbfcd338bc8e60",
"0x1fe8886a1764a862370570f0151106cf38244f0926ee9435cb7c58879abdb9ee",
"0xff9b81afca89e6ee5aaaa0ab38e997e6321a770548a0550f3ac88103692b981c",
"0x1e1c019a9740d9864e58539f896df4787c74d8d2dc2924a01ebc1372fb25e9fc",
"0x6128a5b7448d5d72d6ebe423e9233998a4890616f6e08fd883f9915024b17123",
"0x7e7f9efc1067273482a433f61f2715603b14993a2614258db8ff2dc966dd2bbf",
"0xfa95ff8cac33c552eae54619ed9265fa8aab8282a57e5659ca18d5cbd859b462",
"0xb63bd4405e3255dc2b6ab95355bd5e6e44c5865a86b7ec4906debf8ab0e9c250",
"0x9afeb719a9d51516da0a5b662b2e876bc37829b0ebf08034e7a0c0b0f4b27541",
"0xf3a1059e86d4e10906fe9164ba8b95345d6e22b52750b85a18ef8d16472b0f5f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

