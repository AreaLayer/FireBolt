const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');

// Function to generate a random mnemonic
function generateMnemonic() {
  return bip39.generateMnemonic();
}

// Function to get a seed from mnemonic
function getSeedFromMnemonic(mnemonic) {
  return bip39.mnemonicToSeedSync(mnemonic).toString('hex');
}

// Function to create a Bitcoin key pair from a seed
function getBitcoinKeyPairFromSeed(seed) {
  const root = bitcoin.bip32.fromSeed(Buffer.from(seed, 'hex'));
  const child = root.derivePath("m/44'/0'/0'/0/0"); // Support Taproot and Segwit backup
  const keyPair = bitcoin.ECPair.fromPrivateKey(child.privateKey);
  return keyPair;
}

// Example Usage:
const generatedMnemonic = generateMnemonic();
console.log('Generated Mnemonic:', generatedMnemonic);

const seed = getSeedFromMnemonic(generatedMnemonic);
console.log('Seed from Mnemonic:', seed);

const keyPair = getBitcoinKeyPairFromSeed(seed);
console.log('Bitcoin Address:', keyPair.getAddress());
console.log('Bitcoin Private Key (WIF):', keyPair.toWIF());

