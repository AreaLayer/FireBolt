const tbd = require('web5-js');
const payjoin = require('payjoinjs-lib');
const bitcoin = require('bitcoinjs-lib');

const network = bitcoin.networks.testnet;

      web5.connect();

      web5.on('connect', () => {
        console.log(`connected to ${relay.url}`);
      });
      relay.on('error', () => {
        console.log(`failed to connect to ${relay.url}`);
      });

      const privateKey = Web5Js.generatePrivateKey();
      const publicKey = Web5Js.getPublicKey(privateKey);

    async function generatePSBT(input) {
      const [inputTxId, inputIndex] = input.split(':');

      const psbt = new bitcoin.Psbt({ network: NETWORK, maximumFeeRate: 100 });
      psbt.addInput({
        hash: inputTxId,
        index: parseInt(inputIndex),
        sighashType: bitcoin.Transaction.SIGHASH_NONE | bitcoin.Transaction.SIGHASH_ANYONECANPAY,
      });

      const outputs = [
  { 'tb1q': '0' },
];

      outputs.forEach(output => {
    const address = Object.keys(output)[0];
    psbt.addOutput({
      address: address,
      value: 0,
    });
  });

      return psbt.toBase64();
    }

      const sendMessage = async (event) => {
        console.log("sendMessage function called");
        event.preventDefault();


        const recipientNostrID = document.getElementById("recipient-id").value;
          console.log("Recipient ID:", recipientNostrID);

        const psbtBase64 = JSON.stringify({
      PSBT: document.getElementById("signed-psbt").value
    });

        const encryptedMessageData = await NostrTools.nip04.encrypt(privateKey, recipientID, psbtBase64);

      const dmEvent = {
        kind: 4,
        pubkey: publicKey,
        tags: [['p', recipientNostrID]],
        content: encryptedMessageData,
        created_at: Math.floor(Date.now() / 1000),
      };

      const dmEventId = NostrTools.getEventHash(dmEvent);
      const dmEventSig = NostrTools.signEvent(dmEvent, privateKey);
      dmEvent.id = dmEventId;
      dmEvent.sig = dmEventSig;

      const dmPub = dwn.publish(dmEvent);
      dmPub.on('ok', () => {
        console.log(`${dwn.url} has accepted our dm`);
        alert('\n Event ID:' + dmEventId);
      });
      dmPub.on('seen', () => {
        console.log(`we saw the dm event on ${relay.url}`);
      });
      dmPub.on('failed', reason => {
        console.log(`failed to publish dm to ${relay.url}: ${reason}`);
        alert(`Failed to send message: ${reason}`);
      });
    };
