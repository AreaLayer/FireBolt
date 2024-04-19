const {UTXOs, Address, Radom, Payments} = require('bitcoinjs-lib');
const firebolt = require('main_function');
const axios = require('axios');

// Bitcoin network configuration
const network = bitcoin.networks.testnet;

// Generate a new Bitcoin address
function generateAddress() {
  const keyPair = bitcoin.ECPair.makeRandom({ network });
  const { address } = bitcoin.payments.p2tr({ pubkey: keyPair.publicKey, network });

  return { address, privateKey: keyPair.toWIF() };
}

// Fetch unspent transaction outputs (UTXOs) for an address
async function getUTXOs(address) {
  const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}/full`);
  return response.data.txrefs.filter(utxo => utxo.spent === false);
}

// Create and sign the swap transaction
async function createSwapTransaction(inputAddress, outputAddress, amount, fee, rbf) {
  const utxos = await getUTXOs(inputAddress);
  const keyPair = bitcoin.ECPair.fromWIF(inputAddress.privateKey, network);

  const txb = new bitcoin.TransactionBuilder(network);
  let totalInput = 0;

  for (const utxo of utxos) {
    txb.addInput(utxo.tx_hash, utxo.tx_output_n);
    totalInput += utxo.value;
  }

  const totalOutput = amount + fee;
  txb.addOutput(outputAddress, amount);
  txb.addOutput(inputAddress.address, totalInput - totalOutput);

  for (let i = 0; i < utxos.length; i++) {
    txb.sign(i, keyPair);
  }

  const tx = txb.build().toHex();
  return tx;
}

// Broadcast the transaction to the Bitcoin network
async function broadcastTransaction(transaction) {
  try {
    const response = await axios.post('https://api.blockcypher.com/v1/btc/test3/txs/push', {
      tx: transaction,
    });
    console.log('Transaction broadcasted:', response.data.tx.hash);
  } catch (error) {
    console.error('Error broadcasting transaction:', error.response.data);
  }
}

// Example usage
async function run() {
  // Generate a new Bitcoin address
  const inputAddress = generateAddress();
  console.log('Input Address:', inputAddress.address);

  // Destination address for swapped coins
  const outputAddress = 'YOUR_OUTPUT_ADDRESS';

  // Amount and fee for the swap transaction
  const amount = 0.01;
  const fee = 0.0001;

  // Create and sign the swap transaction
  const transaction = await createSwapTransaction(inputAddress, outputAddress, amount, fee);
  console.log('Swap Transaction:', transaction);

  // Broadcast the transaction
  await broadcastTransaction(transaction);
}

run().catch(console.error);
