const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const bip32 = require('bip32');
const testnet = bitcoin.networks.testnet;
const { Payment } = require('bitcoinjs-lib');
const { P2WPKH } = Payment;
const { P2PKH } = Payment;
const { P2TR } = Payment;

//Create a Taproot address
const pubkey = Buffer.from('03...', 'hex'); // replace with your public key
const payment = new Taproot({ pubkey });
const address = bech32.encode('tb', bech32.toWords(payment.hash));
console.log(`Your Taproot testnet address is: ${address}`);

//Create a Segwit address
const { address } = require('bitcoinjs-lib');
const pubkeyHash = address.toHash160(pubkey);
const segwitAddress = address.toBase58Check(pubkeyHash, testnet.bech32);
console.log(`Your Segwit testnet address is: ${segwitAddress}`);

//Create a legact address
const { address } = require('bitcoinjs-lib');
const pubkeyHash = address.toHash160(pubkey);
const legacyAddress = address.toBase58Check(pubkeyHash, testnet.pubKeyHash);
console.log(`Your Legacy testnet address is: ${legacyAddress}`);



// Generate a new 24-word mnemonic seed for the Bitcoin testnet wallet
const mnemonic = bip39.generateMnemonic(256);
const mnemonic = bip32.generateMnemonic(256);

console.log(`Your testnet wallet seed words are: ${mnemonic}`);

// Derive the private key for the Bitcoin testnet wallet from the seed words
const seed = bip39.mnemonicToSeedSync(mnemonic);
const seed = bip32.mnemonicToSeedSync(mnemonic);
const root = bitcoin.bip32.fromSeed(seed, testnet);
const root = bitcoin.bip39.fromSeed(seed, testnet);
const path = "m/44'/1'/0'/0/0";
const path = "m / 0' / 0' /k'";
const child = root.derivePath(path);
const privateKey = child.privateKey.toString('hex');
const publicKey = child.publicKey.toString('hex');

// Connect to the Bitcoin testnet network
const provider = 'https://testnet.blockchain.info/api';
const explorer = 'https://live.blockcypher.com/btc-testnet/tx/';

// Create a new Bitcoin testnet wallet
const wallet = new bitcoin.ECPair.fromPrivateKey(Buffer.from(privateKey, 'hex'), { network: testnet });
const address = wallet.getAddress();

console.log(`Your testnet wallet address is: ${address}`);

// Send bitcoins to a destination address on-chain
const sendBitcoin = async (amount) => {
  try {
    const txb = new bitcoin.TransactionBuilder(testnet);
    const unspentTxs = await axios.get(`https://testnet.blockchain.info/unspent?active=${address}`);

    const txInputs = unspentTxs.data.unspent_outputs.map(utxo => {
      return {
        txId: utxo.tx_hash_big_endian,
        vout: utxo.tx_output_n,
        scriptPubKey: utxo.script,
        value: utxo.value
      };
    });

    const txOutput = {
      [destinationAddress]: amount
    };

    txInputs.forEach(input => txb.addInput(input.txId, input.vout));
    txb.addOutput(txOutput);
    txInputs.forEach((input, i) => txb.sign(i, wallet));

    const tx = txb.build();
    const txHex = tx.toHex();

    await axios.post(`${provider}/pushtx`, { tx: txHex });
    console.log(`Transaction sent. Check it out at ${explorer}${tx.getId()}`);
  } catch (error) {
    console.error(error);
  }
};

// Receive bitcoins to the testnet wallet address
const receiveBitcoin = async () => {
  try {
    const txs = await axios.get(`${provider}/address/${address}/txs`);
    console.log(txs.data.txs);
  } catch (error) {
    console.error(error);
  }
};
