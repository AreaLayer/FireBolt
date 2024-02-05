const payjoin = require('payjoin-client');
const {client, request, wallet} = require('payjoin-client');
const bitcoin = require('bitcoinjs-lib');
const axios = require('axios');

// Set up the Payjoin sender
async function payjoinSender(destinationAddress, changeAddress, utxos, feeRate, endpoint) {
  try {
    // Fetch the public key and script for the destination address
    const destination = bitcoin.address.toOutputScript(destinationAddress);
    const destinationPubKey = bitcoin.script.decompile(destination)[1];

    // Create a new transaction
    const txb = new bitcoin.TransactionBuilder();

    // Add the input UTXOs to the transaction
    for (const utxo of utxos) {
      txb.addInput(utxo.txid, utxo.vout);
    }

    // Calculate the total input amount
    const totalInput = utxos.reduce((acc, utxo) => acc + utxo.value, 0);

    // Calculate the desired output amount (total input - fee)
    const desiredOutput = totalInput - (feeRate * txb.buildIncomplete().virtualSize());

    // Add the output to the destination address
    txb.addOutput(destinationAddress, desiredOutput);

    // Add the output for the change address
    txb.addOutput(changeAddress, totalInput - desiredOutput);

    // Sign the inputs
    for (let i = 0; i < utxos.length; i++) {
      const utxo = utxos[i];

      const prevTx = await axios.get(`https://blockstream.info/api/tx/${utxo.txid}`);
      const prevOutput = prevTx.data.vout[utxo.vout];

      const inputScript = bitcoin.address.fromOutputScript(prevOutput.scriptpubkey);
      const inputKeyPair = bitcoin.ECPair.fromWIF(utxo.wif);

      txb.sign(i, inputKeyPair, null, null, prevOutput.value, prevOutput.scriptpubkey);
    }

    // Build the unsigned transaction
    const unsignedHex = txb.buildIncomplete().toHex();

    // Create the Payjoin request
    const payjoinRequest = {
      unsigned_hex: unsignedHex,
      destination_pubkey: destinationPubKey.toString('hex'),
      outputs: txb.buildIncomplete().outs.map(output => ({
        address: bitcoin.address.fromOutputScript(output.script),
        value: output.value
      }))
    };

    // Send the Payjoin request to the server
    const response = await axios.post(endpoint, payjoinRequest);
    const signedHex = response.data.signed_hex;

    // Finalize the transaction with the server-signed inputs
    const serverSignedTx = bitcoin.TransactionBuilder.fromTransaction(
      bitcoin.Transaction.fromHex(signedHex)
    );

    // Sign the inputs with the server-signed inputs
    for (let i = 0; i < utxos.length; i++) {
      const utxo = utxos[i];
      const inputKeyPair = bitcoin.ECPair.fromWIF(utxo.wif);
      serverSignedTx.sign(i, inputKeyPair, null, null, utxo.value);
    }

    // Build the final transaction
    const finalTx = serverSignedTx.build();

    // Print the final transaction hex
    console.log(finalTx.toHex());
  } catch (error) {
    console.error('Payjoin sender error:', error);
  }
}

// Example usage
const destinationAddress = 'YOUR_DESTINATION_ADDRESS';
const changeAddress = 'YOUR_CHANGE_ADDRESS';
const utxos = [
  {
    txid: 'UTXO_1_TXID',
    vout: UTXO_1_VOUT,
    value: UTXO_1_VALUE,
    wif: 'UTXO_1_PRIVATE_KEY_WIF'
  },
  {
    txid: 'UTXO_2_TXID',
    vout: UTXO_2_VOUT,
    value: UTXO_2_VALUE,
    wif: 'UTXO_2_PRIVATE_KEY_WIF'
  },
  // Add more UTXOs if necessary
];
const feeRate = 2; // Set your desired fee rate (sat/vbyte)
const endpoint = 'PAYJOIN_SERVER_ENDPOINT';

payjoinSender(destinationAddress, changeAddress, utxos, feeRate, endpoint);
