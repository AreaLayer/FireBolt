const bitcoin = require('bitcoinjs-lib');
const testnet = bitcoin.networks.testnet;

// Replace the values below with your own testnet wallet information
const privateKey = 'YOUR_PRIVATE_KEY';
const publicKey = 'YOUR_PUBLIC_KEY';
const destinationAddress = 'DESTINATION_ADDRESS';

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
