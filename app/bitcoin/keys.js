import {PrivateKey, Random, PublicKey} = require('bitcoinjs-lib');

// Generate three key pairs
const key1 = bitcoin.ECPair.makeRandom();
const key2 = bitcoin.ECPair.makeRandom();
const key3 = bitcoin.ECPair.makeRandom();

// Create public keys from the key pairs
const pubKey1 = key1.publicKey;
const pubKey2 = key2.publicKey;
const pubKey3 = key3.publicKey;

// Create a redeem script with 2-of-3 multisig condition
const redeemScript = bitcoin.script.multisig.output.encode(2, [pubKey1, pubKey2, pubKey3]);

// Generate a P2SH address from the redeem script
const multisigAddress = bitcoin.payments.p2sh({
  redeem: { output: redeemScript, network: bitcoin.networks.bitcoin },
  network: bitcoin.testnet.bitcoin
}).address;

console.log('Multisig Address:', multisigAddress);

// Output the public keys and private keys for reference
console.log('Public Key 1:', pubKey1.toString('hex'));
console.log('Public Key 2:', pubKey2.toString('hex'));
console.log('Public Key 3:', pubKey3.toString('hex'));
console.log('Private Key 1:', key1.toWIF());
console.log('Private Key 2:', key2.toWIF());
console.log('Private Key 3:', key3.toWIF());
