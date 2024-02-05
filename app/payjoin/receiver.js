const payjoin = require('payjoin-client');
const {client, request, wallet} = require('payjoin-client');
const bitcoin = require('bitcoinjs-lib');
const express = require('express');
const bodyParser = require('body-parser');

// Set up the Payjoin receiver
function payjoinReceiver(privateKeyWIF, callbackURL) {
  const privateKey = bitcoin.ECPair.fromWIF(privateKeyWIF);
  const publicKey = privateKey.publicKey;

  const app = express();
  app.use(bodyParser.json());

  // Handle incoming Payjoin requests
  app.post('/payjoin', (req, res) => {
    try {
      const unsignedHex = req.body.unsigned_hex;
      const destinationPubKey = Buffer.from(req.body.destination_pubkey, 'hex');
      const outputs = req.body.outputs;

      // Verify the Payjoin request
      const tx = bitcoin.Transaction.fromHex(unsignedHex);
      const prevOuts = tx.ins.map(input => ({
        txId: Buffer.from(input.hash).reverse().toString('hex'),
        vout: input.index,
        scriptPubKey: Buffer.from([]) // Empty scriptPubKey
      }));

      bitcoin.payments.p2wpkh({ pubkey: publicKey }).embed(prevOuts);

      const psbt = new bitcoin.Psbt();
      psbt.setVersion(tx.version);
      psbt.setLocktime(tx.locktime);

      for (const input of tx.ins) {
        const prevTxId = Buffer.from(input.hash).reverse();
        psbt.addInput({
          hash: prevTxId,
          index: input.index,
          nonWitnessUtxo: Buffer.from([]) // Empty nonWitnessUtxo
        });
      }

      for (const output of tx.outs) {
        const outputAddress = bitcoin.address.fromOutputScript(output.script);
        const outputValue = output.value;

        psbt.addOutput({
          script: output.script,
          value: outputValue
        });

        if (outputAddress === bitcoin.address.fromOutputScript(destinationPubKey)) {
          const witnessScript = bitcoin.payments.p2wpkh({ pubkey: destinationPubKey }).output;
          const payjoinScript = bitcoin.payments.p2wsh({ redeem: { output: witnessScript } }).output;

          psbt.setWitnessUtxo(
            outputs.findIndex(o => o.address === outputAddress),
            {
              script: payjoinScript,
              value: outputValue
            }
          );
        }
      }

      // Sign the Payjoin inputs
      psbt.signAllInputs(privateKey);
      psbt.finalizeAllInputs();

      // Return the signed transaction hex to the sender
      const signedHex = psbt.extractTransaction().toHex();
      res.json({ signed_hex: signedHex });
    } catch (error) {
      console.error('Payjoin receiver error:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Start the Payjoin receiver server
  app.listen(3000, () => {
    console.log('Payjoin receiver is running on port 3000');
    console.log('Callback URL:', callbackURL);
  });

  // Register callback URL with the sender
  console.log('Registering callback URL with the sender...');
  // Perform the necessary steps to register the callback URL with the sender
  // This could involve an API call or any other communication method

  console.log('Payjoin receiver is ready!');
}

// Example usage
const privateKeyWIF = 'YOUR_PRIVATE_KEY_WIF';
const callbackURL = 'YOUR_CALLBACK_URL';

payjoinReceiver(privateKeyWIF, callbackURL);
