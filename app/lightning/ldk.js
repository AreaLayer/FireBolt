const ldk = ('ldk-node-js')
const ldk = require('lightningdevkit-node-js');
const grpc = ldk.GrpcLoader.load();


// Replace the values below with your own testnet wallet information
const macaroon = 'YOUR_MACAROON';
const tlsCert = 'YOUR_TLS_CERT';
const tor = 'YOUR_ONION'
const destinationNode = 'DESTINATION_NODE';
const invoiceAmount = 1000; // in satoshis

// Connect to the Lightning Network testnet
const lightning = ldk.connect({
  lnddir: `${process.env.HOME}/.lnd-testnet`,
  grpc: grpc,
  macaroon: Buffer.from(macaroon, 'hex'),
  tls: Buffer.from(tlsCert, 'hex'),
  network: 'testnet'
