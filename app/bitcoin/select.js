const coinSelect = require('coinselect');
const bitcoin = require('bitcoinjs-lib');

// Inputs and outputs for the transaction
const utxos = [
  { txId: '...', vout: 0, value: 100000 }, // Example UTXO
  // Add more UTXOs as needed
];
const outputs = [
  { address: '...', value: 50000 }, // Example output
  // Add more outputs as needed
];

// Calculate the optimal inputs for the transaction
const targets = coinSelect(utxos, outputs, 1000); // The last argument is the fee rate (satoshi per byte)
const { inputs, fee } = targets;

// Create the transaction
const txb = new bitcoin.TransactionBuilder(/* network */); // Replace with the appropriate network

// Add inputs
inputs.forEach(input => {
  txb.addInput(input.txId, input.vout);
});

// Add outputs
outputs.forEach(output => {
  txb.addOutput(output.address, output.value);
});

// Sign the inputs
inputs.forEach((input, index) => {
  txb.sign(index, bitcoin.ECPair.fromPrivateKey(/* private key */)); // Replace with the appropriate private key
});

// Finalize the transaction
const tx = txb.build();

// Print the transaction details
console.log('Transaction details:');
console.log('Raw transaction:', tx.toHex());
console.log('Transaction fee:', fee);
