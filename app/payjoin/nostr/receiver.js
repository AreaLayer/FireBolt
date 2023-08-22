const nostr = require('nostr-tools');
const payjoin = require('payjoinjs-lib');
const bitcoin = require('bitcoinjs-lib');

const NETWORK = bitcoin.networks.testnet

async function generatePSBT(input, output, senderSignedPsbt) {
      const [inputTxId, inputIndex] = input.split(':');

      const psbt = new bitcoin.Psbt({ network: NETWORK, maximumFeeRate: 1000 });
      senderPsbt = bitcoin.Psbt.fromBase64(senderSignedPsbt, { network: NETWORK }) 

      senderPsbt.data.inputs.forEach((input, index) => {
        psbt.addInput({
            ...senderPsbt.data.globalMap.unsignedTx.tx.ins[index],
            ...input
        });
    });

       psbt.addInput({
        hash: inputTxId,
        index: parseInt(inputIndex),
        sighashType: bitcoin.Transaction.SIGHASH_ALL,

    });

    const [key, val] = output.split(',');
    const outputs = { [key]: val };

    const address = Object.keys(outputs)[0];
    const value = parseFloat(outputs[address]) * 100000000;

    console.log(address);
    console.log(value);
    
    psbt.addOutput({
      address: address,
      value: value,
    });

    return psbt.toBase64();
