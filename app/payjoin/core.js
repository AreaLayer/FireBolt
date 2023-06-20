const payjoin = require('payjoin-lib');
const network = bitcoin.network

async function createPayJoinTransaction(privateKey, utxos, payjoinEndpoint) {
  // Fetch the latest transaction fee rate
  const feeRate = await fetchFeeRate();

  // Create a new transaction builder
  const txb = new bitcoin.TransactionBuilder();

  // Set the network (replace 'testnet' with 'mainnet' for mainnet)
  const network = bitcoin.networks.testnet;
  txb.setVersion(2).setLockTime(0).network = network;

  // Add the inputs to the transaction builder
  utxos.forEach(utxo => {
    txb.addInput(utxo.txid, utxo.vout);
  });

  // Calculate the total input amount
  const totalInputAmount = utxos.reduce((acc, utxo) => acc + utxo.value, 0);

  // Calculate the payjoin output amount
  const payjoinOutputAmount = Math.floor(totalInputAmount / 2);

  // Calculate the change output amount
  const changeOutputAmount = totalInputAmount - payjoinOutputAmount;

  // Add the payjoin output
  txb.addOutput(payjoinOutputAmount, payjoinEndpoint);

  // Add the change output
  txb.addOutput(changeOutputAmount, bitcoin.payments.p2pkh({ pubkey: privateKey.publicKey, network }).address);

  // Sign the inputs
  utxos.forEach((utxo, index) => {
    txb.sign(index, privateKey);
  });

  // Build the transaction
  const tx = txb.build();

  return tx.toHex();
}

async function fetchFeeRate() {
  try {
    const response = await axios.get('https://api.blockchair.com/bitcoin/stats');
    const feeRate = Math.ceil(response.data.data[0].median_transaction_fee / 10);
    return feeRate;
  } catch (error) {
    throw new Error('Failed to fetch fee rate');
  }
}

module.exports = {
  createPayJoinTransaction
};

