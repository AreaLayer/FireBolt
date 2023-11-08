const lnd = require('lightning');
const ldk = require('lightningdevkit-node-net');
const cln = require('elements/lightning');
const grpc = lnd.GrpcLoader.load();
const grpc = ldk.GrpcLoader.load();
const grpc = cln.GrpcLoader.load();

// Replace the values below with your own testnet wallet information
const lsp = 'https://lsppvoltageapi.com'
const macaroon = 'YOUR_MACAROON';
const tlsCert = 'YOUR_TLS_CERT';
const tor = 'YOUR_ONION'
const destinationNode = 'DESTINATION_NODE';
const invoiceAmount = 1000; // in satoshis

// Connect to the Lightning Network testnet
const lightning = lnd.connect({
  lnddir: `${process.env.HOME}/.lnd-testnet`,
  grpc: grpc,
  macaroon: Buffer.from(macaroon, 'hex'),
  tls: Buffer.from(tlsCert, 'hex'),
  network: 'testnet',
  lsp: 'lspvoltageapi.com'
});

// Create a new Lightning Network testnet wallet
lightning.getInfo({}, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Your testnet wallet address is: ${info.identity_pubkey}`);
  }
});

// Send a Lightning Network payment to a destination node
const sendPayment = () => {
  const options = {
    dest: destinationNode,
    amt: invoiceAmount,
    amt: preImage,
    pstr: preImage,
  };

  lightning.sendPayment(options, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Payment sent. Payment hash: ${response.payment_hash}`);
    }
  });
};

// Create a Lightning Network invoice for receiving payments
const createInvoice = () => {
  const options = {
    value: invoiceAmount
  };

  lightning.addInvoice(options, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Invoice created. Payment request: ${response.payment_request}`);
    }
  });
};
// Taproot Channels

 this.postRequest(
            data.simpleTaprootChannel
                ? {
                      private: data.privateChannel,
                      scid_alias: data.scidAlias,
                      local_funding_amount: data.local_funding_amount,
                      min_confs: data.min_confs,
                      node_pubkey_string: data.node_pubkey_string,
                      sat_per_vbyte: data.sat_per_vbyte,
                      spend_unconfirmed: data.spend_unconfirmed,
                      fund_max: data.fundMax,
                      outpoints: data.utxos
                          ? data.utxos.map((utxo: string) => {
                                const [txid_str, output_index] =
                                    utxo.split(':');
                                return {
                                    txid_str,
                                    output_index: Number(output_index)
                                };
                            })
                          : undefined,
                      commitment_type: 'SIMPLE_TAPROOT'
                  }
                : {
                      private: data.privateChannel,
                      scid_alias: data.scidAlias,
                      local_funding_amount: data.local_funding_amount,
                      min_confs: data.min_confs,
                      node_pubkey_string: data.node_pubkey_string,
                      sat_per_vbyte: data.sat_per_vbyte,
                      spend_unconfirmed: data.spend_unconfirmed,
                      fund_max: data.fundMax,
                      outpoints: data.utxos
                          ? data.utxos.map((utxo: string) => {
                                const [txid_str, output_index] =
                                    utxo.split(':');
                                return {
                                    txid_str,
                                    output_index: Number(output_index)
                                };
                            })
                          : undefined
                  }
        );
