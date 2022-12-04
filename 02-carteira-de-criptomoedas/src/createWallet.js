//Importa dependencias
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

//Define rede
const network = bitcoin.networks.testnet;

//Derivação de carteiras HD
const path = `m/49'/1'/0'/0`;

//Cria mnemonic para a seed (Plavras de senha)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//Cria raiz da carteira HD
let root = bip32.fromSeed(seed, network);

//Cria uma conta par pvt-sub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
}).address

console.log("X-X-X- Carteira gerada -X-X-X");
console.log("Endereço: ", btcAddress);
console.log("Chave privada: ", node.toWIF());
console.log("Seed: ", mnemonic);