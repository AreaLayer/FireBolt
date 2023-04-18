const { lnd } = require('lightning');
const grpc = lnd.GrpcLoader.load();
const bip39 = require('bip39');

// Generate a new 24-word mnemonic seed for the Lightning Network testnet wallet
const mnemonic = bip39.generateMnemonic(256);

console.log(`Your testnet wallet seed words are: ${mnemonic}`);

// Convert the seed words to a deterministic seed for the Lightning Network testnet wallet
const seed = bip39.mnemonicToSeedSync(mnemonic);
const deterministicSeed = Buffer.from(seed).toString('hex');

// Replace the values below with your own testnet wallet information
const macaroon = 'YOUR_MACAROON';
const tlsCert = 'YOUR_TLS_CERT';
const lightning = lnd({
  grpc,
  url: 'localhost:10009',
  cert: tlsCert,
  macaroon
});

// Create a new Lightning Network testnet wallet
lightning.seed({ seed: deterministicSeed }, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log(`Your Lightning Network testnet wallet has been created with the following credentials:\n\nNode ID: ${response.identityPubkey}\nSeed Words: ${mnemonic}\n`);
});
