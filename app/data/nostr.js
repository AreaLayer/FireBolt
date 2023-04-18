// Load the necessary libraries
const bip39 = require('bip39');
const Nostr = require('nostr-js');

// Set up the Nostr client
const nostrClient = new Nostr('wss://relay.damus.io');

// Generate a random mnemonic phrase
const mnemonic = bip39.generateMnemonic();

// Derive the master seed from the mnemonic phrase
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Use the seed to derive the master private key
const hdWallet = bip32.fromSeed(seed);

// Derive a child key for a specific index (e.g., 0)
const childKey = hdWallet.derivePath(`m/44'/60'/0'/0/0`);

// Get the private key and address for the child key
const privateKey = childKey.privateKey.toString('hex');
const address = nostrClient.utils.getAddressFromPrivateKey(privateKey);

// Send some btcoin from the address
const transaction = {
  from: address,
  to: 'bcq1...',
  value: 1,
  sats: 100000,
};
nostrClient.eth.sendTransaction(transaction, privateKey)
  .then((txHash) => {
    console.log(`Transaction hash: ${txHash}`);
  })
  .catch((error) => {
    console.error(error);
  });

