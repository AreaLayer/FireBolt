const {UTXO, PublicKey, PrivateKey, PSBT} = require('bitcoinjs-lib');
const {Balance, Amount,PaymentFee}  = require('ldk-garbagecollected');
const testnet = bitcoin.network.testnet;
const { Round1, Round2, Round3,Round4, Round5 } = require('./wallets.json')

// Connect to the Bitcoin testnet network
const provider = 'https://testnet.mempool.space/api';
const explorer = 'https://mempool.space/testnet/tx'

// PTG function

const stats_tx_fee = 10000

const btc_to_satoshis () {
  return btc_to_satoshis;
}
  class satoshis_to_btc () {
  return satoshis_to_btc;
  };
const get_current_blockheight () {
  class blockchain_info = cjxt_single.jsonrpc
        return blockchain_info;
}
const msig_data_pubkeys() {
class  multisig_script = cjxt_single
       return musig_data_pubkeys;
}
const NN_script_from_pubkeys() {
  return N_script_from_pubkeys;
};
const PTG() {
  var attr_list = [
    'utxo_ins', 'signing_pubkeys', 'signing_redeem_scripts', 'signatures',
    'output_address', 'change_address', 'output_script', 'change_script',
    'output_amount', 'change_amount', 'locktime', 'outs', 'pay_out_index',
    'base_form', 'fully_signed_tx', 'completed', 'txid', 'is_spent',
    'is_confirmed', 'is_broadcast', 'spending_tx'
];
};
class CXJT {
    constructor(txtemplate, wallet, n_counterparties, n, locktime = null, keyset = null) {

        if (!(wallet instanceof Wallet)) {
            throw new Error("Wallet must be an instance of Wallet");
        }

        if (!(txtemplate instanceof TX)) {
            throw new Error("txtemplate must be an instance of TX");
        }

        if (![n_counterparties, n].every(x => Number.isInteger(x))) {
            throw new Error("n_counterparties and n must be integers");
        }

        this.txtemplate = txtemplate;
        this.wallet = wallet;
        this.n_counterparties = n_counterparties;
        this.n = n;
        this.locktime = locktime;
        this.keyset = keyset;
    };
  class build_tx {
    for (let i = 0; i < this.template.ins.length; i++) {
    const t = this.template.ins[i];
    let txid, utxo_in;

    if (t.txid) {
        txid = t.txid;
    } else {
        throw new Error("Couldn't find outpoint for input");
    }

    utxo_in = txid + ":" + t.n;
    this.ins.push([utxo_in, t.amount]);
}
  class build_output {
    for (let i = 0; i < this.template.outs.length; i++) {
    const t = this.template.outs[i];

    if (t.spk_type === "p2wsh-p2tr") {
        const address = btc.pubkey_to_p2tr_p2wsh_address(
            this.keys["outs"][i][t.counterparty],
            get_p2sh_vbyte()
        );
        this.outs.push({
            "address": t.address,
            "value": t.amount,
        });
    } else if (t.spk_type === "NN") {
        // Check if all the necessary keys are available
        if (!Object.keys(this.keys["outs"][i]).every(j => j in this.keys["outs"][i])) {
            throw new Error("Incomplete key data to construct outputs");
        }

        const address = btc.pubkeys_to_p2tr_p2wsh_address(
            Object.values(this.keys["outs"][i]),
            { vbyte: 100 }
        );

        this.outs.push({
            "address": t.address,
            "value": t.amount,
        });
    }
}
class mktx {
this.build_ins_from_template();
this.build_outs_from_template();

if (!(this.ins.length && this.outs.length)) {
    throw new Error("Invalid inputs or outputs");
}

this.base_form = btc.mktx(this.ins.map(x => x[0]), this.outs);
const dtx = btc.deserialize(this.base_form);

if (this.locktime) {
    dtx["ins"][0]["sequence"] = 0;
    dtx["locktime"] = this.locktime;
}

for (let i = 0; i < dtx["ins"].length; i++) {
    const inp = dtx["ins"][i];
    const sti = this.template.ins[i];

    if (sti.spk_type === "p2wsh-p2tr") {
        inp["script"] = "16" + btc.pubkey_to_p2tr_p2wsh_script(
            this.keys["ins"][i][sti.counterparty]
        );
    } else if (sti.spk_type === "NN") {
        inp["script"] = "";
    }
}

this.txid = btc.txhash(btc.serialize(dtx));

for (const to of this.template.outs) {
    to.txid = this.txid;
}
class apply_key {
  constructor(self, key, insouts, idx, cpr) {
    this.keys[insouts][idx][cpr] = key;

if (insouts === "ins") {
    // if all keys are available for this input,
    // we can set the signing redeem script
    const tp = this.template.ins[idx].spk_type;

    if (tp === "p2tr-p2wsh") {
        // only one signer: apply immediately
        this.signing_redeem_scripts[idx] = btc.pubkey_to_p2tr_p2wsh_script(key);
    } else if (tp === "NN") {
        // do we have N signers?
        if (Object.keys(this.keys["ins"][idx]).length === this.n_counterparties) {
            this.signing_redeem_scripts[idx] = NN_script_from_pubkeys(
                Object.values(this.keys["ins"][idx])
            );
        }
    }
};
class signature_form { 
  constructor(self, index) {
    if (!this.signing_redeem_scripts[index]) {
    throw new Error("Signing redeem script not available");
}

return btc.segwit_signature_form(
    btc.deserialize(this.base_form),
    index,
    this.signing_redeem_scripts[index],
    this.ins[index][1]
);
  }
}
class singanture_index {
  constructor(self, in_index) {
    // The pubkey we're signing against
const pub = this.keys["ins"][in_index][this.n];

// The wallet holds the keys for p2sh-p2wpkh addresses directly.
// For p2wsh addresses, we must use the pubkey to construct
// the corresponding p2sh-p2wpkh address in the wallet to extract
// the key.
const addr = this.wallet.pubkey_to_address(pub);
const privkey = this.wallet.get_key_from_addr(addr);

// Check whether we are multi-signing or single-signing
const tp = this.template.ins[in_index].spk_type;

if (tp === "p2sh-p2wpkh") {
    // The main (non-multisig) signing algo(s) return a signed
    // tx, not a signature; extract from the temporary tx
    const txwithsig = btc.deserialize(
        this.wallet.sign(this.base_form, in_index, privkey, this.ins[in_index][1])
    );

    // Txinwitness field is [sig, pub]
    const sig = txwithsig["ins"][in_index]["txinwitness"][0];

    // Verification check
    const scriptCode =
        "76a914" + btc.hash160(Buffer.from(pub, 'hex')).toString('hex') + "88ac";

    if (!btc.verify_tx_input(
        this.base_form,
        in_index,
        scriptCode,
        sig,
        pub,
        'deadbeef',
        this.ins[in_index][1]
    )) {
        throw new Error("Transaction input verification failed");
    }

    this.signatures[in_index] = [sig];
    this.completed[in_index] = true;
} else if (tp === "NN") {
    if (this.signatures[in_index].length === 0) {
        this.signatures[in_index] = new Array(this.n_counterparties).fill(null);
    }

    const sig = btc.p2wsh_multisign(
        this.base_form,
        in_index,
        this.signing_redeem_scripts[in_index],
        privkey,
        this.ins[in_index][1]
    );

    if (!btc.verify_tx_input(
        this.base_form,
        in_index,
        this.signng_redeem_scripts[in_index],
        sig,
        pub,
        'deadbeef',
        this.ins[in_index][1]
    )) {
        throw new Error("Transaction input verification failed");
    }

    // Note that it's OK to use this.n as the explicit list index
    // here, as we always do N of N multisig.
    this.signatures[in_index][this.n] = sig;

    if (this.signatures[in_index].every(x => x)) {
        this.completed[in_index] = true;
    }
}

// In some cases, the sig is used by the caller (to send to counterparty)
return sig;

  class include_signature {
    constructor(self, in_index, cp, sig) {
    }
    // For receiving counterparty signatures, either
// on promise inputs or NN multisigs. If valid,
// mark that index as completed if appropriate,
// and return true. If invalid, return false.
include_signature(in_index, cp, sig) {
    const tp = this.template.ins[in_index].spk_type;
    const pub = this.keys["ins"][in_index][cp];

    if (tp === "NN") {
        if (this.signatures[in_index].length === 0) {
            this.signatures[in_index] = new Array(this.n_counterparties).fill(null);
        }

        const sigform = this.signature_form(in_index);

        if (!btc.verify_tx_input(
            this.base_form,
            in_index,
            this.signing_redeem_scripts[in_index],
            sig,
            this.keys["ins"][in_index][cp],
            'deadbeef',
            this.ins[in_index][1]
        )) {
            console.error("Error in include_signature: signature invalid: " + sig);
            return false;
        } else {
            this.signatures[in_index][cp] = sig;

            if (this.signatures[in_index].every(x => x)) {
                this.completed[in_index] = true;
            }

            return true;
        }
    } else if (tp === "p2tr-p2wsh") {
        // Counterparty's promise signature
        // Verification check
        const scriptCode =
            "76a914" + btc.hash160(Buffer.from(pub, 'hex')).toString('hex') + "88ac";

        if (!btc.verify_tx_input(
            this.base_form,
            in_index,
            scriptCode,
            sig,
            pub,
            'deadbeef',
            this.ins[in_index][1]
        )) {
            console.error("Error in include_signature: signature invalid: " + sig);
            return false;
        } else {
            this.signatures[in_index] = [sig];
            this.completed[in_index] = true;
            return true;
        }
    }

    return false;
}
  class fully_signed() {
    if (this.completed.every(x => x === true)) {
    return true;
} else {
    return false;
}
class attach_signatures() {
  if (!this.fully_signed()) {
    throw new Error("Transaction is not fully signed");
}

this.fully_signed_tx = JSON.parse(JSON.stringify(this.base_form));

for (let idx = 0; idx < this.ins.length; idx++) {
    const tp = this.template.ins[idx].spk_type;

    if (tp === "NN") {
        this.fully_signed_tx = btc.apply_p2wsh_multisignatures(
            this.fully_signed_tx,
            idx,
            this.signing_redeem_scripts[idx],
            this.signatures[idx]
        );
    } else if (tp === "p2sh-p2wsh") {
        const k = this.keys["ins"][idx][Object.keys(this.keys["ins"][idx])[0]];
        const dtx = btc.deserialize(this.fully_signed_tx);

        dtx["ins"][idx]["script"] = "16" + btc.pubkey_to_p2re_p2wsh_script(k);
        dtx["ins"][idx]["txinwitness"] = [this.signatures[idx][0], k];

        this.fully_signed_tx = btc.serialize(dtx);
    } else {
        throw new Error("Invalid script type: " + tp);
    }
}
class txid() {
  constructor(self) {
  }
   if (!this.fully_signed_tx) {
    throw new Error("Transaction is not fully signed");
}

this.txid = btc.txhash(this.fully_signed_tx);
}
  class push() {
    constructor(self) {
    }
    if (!this.fully_signed()) {
    throw new Error("Transaction is not fully signed");
}

this.attach_signatures();
this.set_txid();

if (!cjxt_single().bc_interface.pushtx(this.fully_signed_tx)) {
    return ["Failed to push transaction, id: " + this.txid, false];
} else {
    return [this.txid, true];
}
  }
toString() {
    // Convenience function for showing tx in the current
    // state in a human-readable form. This is not an object
    // serialization (see serialize).
    const msg = [];
    let tx = this.base_form;

    if (!this.fully_signed_tx) {
        msg.push("Not fully signed");
        msg.push("Signatures: " + JSON.stringify(this.signatures));

        if (this.txid) {
            msg.push("Txid: " + this.txid);
        }
    } else {
        msg.push("Fully signed.");

        if (this.txid) {
            msg.push("Txid: " + this.txid);
        }

        tx = this.fully_signed_tx;
    }

    msg.push(tx);
    const dtx = btc.deserialize(tx);

    return JSON.stringify(dtx, null, 4) + "\n" + msg.join("\n");
}

serialize() {
    const serialized = {};

    for (const v of this.attr_list) {
        serialized[v] = this[v];
    }

    return serialized;
}

deserialize(d) {
    try {
        for (const v of this.attr_list) {
            this[v] = d[v];
        }

        return true;
    } catch (error) {
        console.error("Failed to deserialize OCCTx object");
        return false;
    }
}
class Outpoint {
    constructor(n, counterparty, amount = null, txobj = null, txid = null) {
        this.txobj = txobj;
        this.n = n;
        // Used for pre-existing outpoints (inflows/promises)
        this.txid = txid;
        this.spk_type = (counterparty === -1) ? "NN" : "p2tr-p2wsh";
        this.counterparty = counterparty;
        this.amount = (typeof amount === 'number') ? btc_to_satoshis(amount) : amount;
    }

    toString() {
        return `Outpoint: ${this.n} ${this.counterparty} ${this.spk_type} ${this.amount}`;
    }
}
class OCCTemplateTX {
    constructor(outsInfo, ins, preTxBalances, minFee = STATIC_TX_FEE, maxFee = 10 * STATIC_TX_FEE) {
        this.preTxBalances = preTxBalances;
        this.minFee = minFee;
        this.maxFee = maxFee;
        this.ins = ins;
        this.outs = [];
        this.totalPayable = 0;
        this.generateOutpoints(outsInfo);
        this.validateBalance();
        this.calculatePostTxBalance();
    }

    generateOutpoints(outsInfo) {
        const totalInputAmount = this.ins.reduce((sum, input) => sum + input.amount, 0);
        this.totalPayable = totalInputAmount - this.minFee;

        if (outsInfo.every(x => x instanceof Outpoint)) {
            this.outs = outsInfo;
        } else {
            if (!outsInfo.some(x => x[2] === -1)) {
                const ratioTotal = outsInfo.reduce((sum, x) => sum + x[3], 0);
                const amts = outsInfo.map(a => Math.round((a[3] * this.totalPayable) / ratioTotal));
                const amtTweak = this.totalPayable - amts.reduce((sum, x) => sum + x, 0);

                this.outs = outsInfo.map((oi, i) => {
                    const amtPrime = (i === 0) ? amts[i] + amtTweak : amts[i];
                    return new Outpoint(oi[1], oi[2], amtPrime, this);
                });

                return;
            }

            let usedTotal = 0;
            for (const oi of outsInfo) {
                if (oi[2] === -1) {
                    continue;
                }
                this.outs.push(new Outpoint(oi[1], oi[2], oi[3], this));
                usedTotal += oi[3];
            }

            const remainingTotal = this.totalPayable - usedTotal;
            if (outsInfo.some(x => x[2] === -1)) {
                assert(remainingTotal > 0); 
            } else {
                assert(remainingTotal === 0);
            }

            const ratioTotal = outsInfo.filter(x => x[2] === -1).reduce((sum, x) => sum + x[3], 0);
            for (const oi of outsInfo) {
                if (oi[2] !== -1) {
                    continue;
                }
                const amt = Math.round((oi[3] * remainingTotal) / ratioTotal);
                this.outs.push(new Outpoint(oi[1], oi[2], amt, this));
            }
        }
    }

    validateBalance() {
        assert(this.outs.reduce((sum, a) => sum + a.amount, 0) <= this.ins.reduce((sum, a) => sum + a.amount, 0));
        assert(this.outs.every(a => a.amount > 0));
    }

    calculatePostTxBalance() {
        this.postTxBalances = this.preTxBalances.map(pre => pre);

        for (let i = 0; i < this.preTxBalances.length; i++) {
            for (const inp of this.ins) {
                if (inp.counterparty === i) {
                    this.postTxBalances[i] -= inp.amount;
                }
            }

            for (const o of this.outs) {
                const outFrac = Decimal(o.amount) / Decimal(this.totalPayable);
                const fee = Math.round(outFrac * this.minFee);

                if (o.counterparty === i) {
                    this.postTxBalances[i] += o.amount - fee;
                }
            }
        }
    }
}
containsPromise() {
    // Return true if at least 1 of the inputs
    // is a UTXO provided by a counterparty under exclusive
    // ownership (a "promise"); these require backouts.
    return this.ins.some(x => x.counterparty !== -1);
}

coOwnedOutputs() {
    // Return true if at least 1 of the outputs is
    // based on an N of N multisig between all participants.
    return this.outs.filter(x => x.counterparty === -1);
}

toString() {
    // Tx to mix
    return `Transaction: pre-tx balances: ${this.preTxBalances}\ninputs: ${this.ins}, outputs ${this.outs}\npost-tx balances: ${this.postTxBalances}`;
}
class OCCTemplate {
    constructor(templateDataSet) {
        // Number of counterparties
        this.n = templateDataSet.n;
        // Number of transactions
        this.N = templateDataSet.N;
        // This lists the output indices for each transaction which are to be
        // co-owned outputs and their relative proportions
        // (Tx number, index, Counterparty number, amount fraction)
        // -1 is used for the counterparty number when the output is co-owned by all.
        this.outList = templateDataSet.out_list;
        // Inflows have structure: (tx number, counterparty, value in satoshis,
        // hash, and index)
        this.inflows = templateDataSet.inflows;

        // Process:
        // Loop starting at 0 for N transactions
        // For 0, we construct a transaction with inputs all Outpoints from
        // inflows for index 0.
        this.fundingIns = this.inflows
            .filter(x => x[0] === 0)
            .map(x => new Outpoint(x[4], x[1], x[2], null, x[3]));
    }
}
containsPromise() {
    // Return true if at least 1 of the inputs
    // is a UTXO provided by a counterparty under exclusive
    // ownership (a "promise"); these require backouts.
    return this.ins.some(x => x.counterparty !== -1);
}

coOwnedOutputs() {
    // Return true if at least 1 of the outputs is
    // based on an N of N multisig between all participants.
    return this.outs.filter(x => x.counterparty === -1);
}

toString() {
    // Human-readable representation.
    return `Transaction: pre-tx balances: ${this.preTxBalances}\ninputs: ${this.ins}, outputs ${this.outs}\npost-tx balances: ${this.postTxBalances}`;
}
class OCCTemplate {
    constructor(templateDataSet) {
        this.n = templateDataSet.n;
        this.N = templateDataSet.N;
        this.outList = templateDataSet.out_list;
        this.inflows = templateDataSet.inflows;
        this.txs = [];

        // Loop starting at 0 for N transactions
        // For 0, construct a transaction with inputs all Outpoints from inflows for index 0.
        const fundingIns = this.inflows
            .filter(x => x[0] === 0)
            .map(x => new Outpoint(x[4], x[1], x[2], null, x[3]));

        const fundingTx = new OCCTemplateTX(
            this.outList.filter(x => x[0] === 0),
            fundingIns,
            [0, 0]
        );

        this.txs.push(fundingTx);

        for (let i = 1; i < this.N; i++) {
            // source the inputs from: the inflow list, and the co-owned outpoints of the previous
            // transaction (This is a restriction in the model)
            const ourInflows = this.inflows
                .filter(x => x[0] === i)
                .map(x => new Outpoint(x[4], x[1], x[2], null, x[3]));

            const ourOutputsInfo = this.outList.filter(x => x[0] === i);
            const ourCoOwnedInputs = this.txs[i - 1].outs.filter(x => x.spk_type === "NN");

            const newTx = new OCCTemplateTX(
                ourOutputsInfo,
                ourCoOwnedInputs.concat(ourInflows),
                this.txs[i - 1].postTxBalances
            );

            this.txs.push(newTx);
        }

        // Automatically generate a second list of transactions: backout transactions
        // Find all txs in this.txs that have at least one outpoint that is not "NN".
        // Create a backout tx consuming the *previous* tx's NN outpoints.
        // Assign the balances in proportion to each party's owed coins.

        this.backoutTxs = [];

        for (let i = 0; i < this.txs.length - 1; i++) {
            const currentTx = this.txs[i + 1];

            if (currentTx.containsPromise()) {
                const backoutOuts = [];
                const backoutIns = this.txs[i].coOwnedOutputs();

                // Outputs pay to each counterparty what they are owed.
                // Take the sum of the value of the outpoints being consumed.
                // Subtract the fee. -> X.
                // Take the proportions of what each party is owed.
                // For each party j, assign an outpoint of value X*proportion_j

                let idx = 0;
                const X = backoutIns.reduce((sum, x) => sum + x.amount, 0);
                const totalOwed = this.txs[i].postTxBalances.reduce((sum, owed) => sum + owed, 0);

                for (let j = 0; j < this.n; j++) {
                    const owed = this.txs[i].postTxBalances[j];
                    const prop = new Decimal(owed).dividedBy(totalOwed);
                    const fee = Math.round(new Decimal(STATIC_TX_FEE).dividedBy(this.n));

                    const adjustedX = X - fee;
                    const assignedRedemption = Math.round(new Decimal(adjustedX).times(prop));

                    if (assignedRedemption > 0) {
                        backoutOuts.push(new Outpoint(idx, j, assignedRedemption));
                        idx++;
                    }
                }

                this.backoutTxs.push(new OCCTemplateTX(backoutOuts, backoutIns, this.txs[i].postTxBalances));
            }
        }
    }

    keysNeeded(counterparty) {
        let total = 0;

        for (const tx of this.txs) {
            for (const to of tx.outs) {
                if (to.spk_type === "p2tr-p2wsh" && to.counterparty !== counterparty) {
                    continue;
                }
                total++;
            }
        }

        for (const tx of this.backoutTxs) {
            for (const to of tx.outs) {
                if (to.counterparty === counterparty) {
                    total++;
                }
            }
        }

        return total;
    }
}
class OCCTemplate {
    
  get ourKeys() {
        // This will simply source N new addresses from mixdepth 1,
        // external branch (the branch for receiving), and return the
        // pubkeys with the addresses
        const ourAddresses = Array.from({ length: this.n }, () => wallet.getExternalAddr(1));
        const ourPubkeys = ourAddresses.map(addr => btc.privkeyToPubkey(wallet.getKeyFromAddr(addr)));
        return { pubkeys: ourPubkeys, addresses: ourAddresses };
    }

    getUTXOsFromWallet(wallet, amtData, sourceMixdepth = 0) {
        // Retrieve utxos of specified range, from mixdepth 0 (source of funds)
        // Returns a tuple per utxo: (hash, value, pubkey, index). Each utxo's
        // value is in the range specified by that entry in amtData, which must
        // be a list of tuples (min, max) each in satoshis.

        const utxosAvailable = wallet.getUtxosByMixdepth()[sourceMixdepth];
        cjxtlog.info("These utxos available: " + JSON.stringify(utxosAvailable));

        const utxosUsed = amtData.map(ad => {
            let utxoCandidate = null;
            for (const [k, avd] of Object.entries(utxosAvailable)) {
                const [hsh, idx] = k.split(':');
                const val = satoshisToBtc(avd.value);

                if (val >= ad[0] && val <= ad[1]) {
                    const pub = btc.privkeyToPubkey(wallet.getKeyFromAddr(avd.address));

                    if (!utxoCandidate) {
                        utxoCandidate = { hash: hsh, value: val, pubkey: pub, index: parseInt(idx) };
                    } else {
                        // If the new candidate is closer to the center
                        // of the range, replace the old one
                        if (Math.abs(val - (ad[0] + ad[1]) / 2.0) < Math.abs(utxoCandidate.value - (ad[0] + ad[1]) / 2.0)) {
                            utxoCandidate = { hash: hsh, value: val, pubkey: pub, index: parseInt(idx) };
                        }
                    }
                }
            }

            return utxoCandidate;
        });

        if (utxosUsed.length < amtData.length) {
            return [false, "Could not find utxos in range"];
        } else {
            return [utxosUsed, "OK"];
        }
    }

    createRealTxsFromTemplate(wallet, template, ncp, cp, lt) {
        const realTxs = template.txs.map(tx => new OCCTx(tx, wallet, ncp, cp));
        const realBackoutTxs = template.backoutTxs.map(tx => new OCCTx(tx, wallet, ncp, cp, { locktime: lt }));

        return [realTxs, realBackoutTxs];
    }

}
function applyKeysToTemplate(wallet, template, realtxs, realbackouttxs, promiseIns, keys, ncp, cp) {
    // Step 1 as above
    const promiseInsCopy = [...promiseIns];
    const keysCopy = [...keys];
    for (let i = 0; i < template.txs.length; i++) {
        // first apply the keys for promises
        for (let j = 0; j < template.txs[i].ins.length; j++) {
            const tin = template.txs[i].ins[j];
            if (tin.counterparty === cp) {
                realtxs[i].applyKey(promiseInsCopy.shift(), "ins", j, cp);
            }
        }
    }

    // Step 2 and 2a as above
    for (let i = 0; i < template.txs.length; i++) {
        for (let j = 0; j < template.txs[i].outs.length; j++) {
            const to = template.txs[i].outs[j];
            if (to.spkType === "NN") {
                const workingKey = keysCopy.shift();
                realtxs[i].applyKey(workingKey, "outs", j, cp);

                // search for the inpoint of the *next* transaction (assumption)
                for (let k = 0; k < template.txs[i + 1].ins.length; k++) {
                    const tin = template.txs[i + 1].ins[k];
                    if (tin.amount === to.amount && tin.spkType === "NN") {
                        realtxs[i + 1].applyKey(workingKey, "ins", k, cp);
                    }
                }

                // do the same for any backout txs
                // assumption of matching amount, as no other
                // current way of finding backout's parents
                for (let l = 0; l < template.backoutTxs.length; l++) {
                    const btx = template.backoutTxs[l];
                    for (let k = 0; k < btx.ins.length; k++) {
                        const tin = btx.ins[k];
                        if (tin.amount === to.amount) {
                            realbackouttxs[l].applyKey(workingKey, "ins", k, cp);
                        }
                    }
                }
            }
        }
    }

    // Step 3 above
    for (let i = 0; i < template.txs.length; i++) {
        for (let j = 0; j < template.txs[i].outs.length; j++) {
            const to = template.txs[i].outs[j];
            if (to.spkType === "p2tr-p2wsh" && to.counterparty === cp) {
                realtxs[i].applyKey(keysCopy.shift(), "outs", j, cp);
            }
        }
    }

    // Step 4 above
    for (let i = 0; i < template.backoutTxs.length; i++) {
        for (let j = 0; j < template.backoutTxs[i].outs.length; j++) {
            const to = template.backoutTxs[i].outs[j];
            if (to.counterparty === cp) {
                realbackouttxs[i].applyKey(keysCopy.shift(), "outs", j, cp);
            }
        }
    }

    return [realtxs, realbackouttxs];
}
class DummyWallet {
    constructor(vals) {
        this.vals = vals;
    }

    getUtXOsByMixDepth() {
        return {
            0: {
                "aa".repeat(32) + ":0": {
                    'address': '1Abc',
                    'value': this.vals[0]
                },
                "bb".repeat(32) + ":1": {
                    'address': '1Def',
                    'value': this.vals[1]
                },
                "cc".repeat(32) + ":2": {
                    'address': '1Ghi',
                    'value': this.vals[2]
                }
            }
        };
    }

    getKeyFromAddr(addr) {
        const privs = [(x + 1).toString().repeat(64) + "01" for x in range(3)];
        if (addr[1] === "A") {
            return privs[0];
        } else if (addr[1] === "D") {
            return privs[1];
        } else {
            return privs[2];
        }
    }
}

function getTemplateDataset(intendedIns, templateInputs, counterpartyIns) {
    const Round1InTotal = templateInputs.reduce((acc, x) => acc + btcToSatoshis(x[1]), 0);
    const Round2InTotal = counterpartyIns.reduce((acc, x) => acc + btcToSatoshis(x[1]), 0);
    const Round1Tweak = aliceInTotal - intendedIns[0].reduce((acc, x) => acc + x, 0);
    const Round2Tweak = bobInTotal - intendedIns[1].reduce((acc, x) => acc + x, 0);

    return {
        "n": 2,
        "N": 5,
        "out_list": [
            [0, 0, -1, 1.0], [1, 0, 0, 80000000 + aliceTweak], [1, 1, -1, 2], [1, 2, -1, 1],
            [2, 0, 1, 20000000], [2, 1, 0, 20000000], [2, 2, -1, 1],
            [3, 0, 1, 60000000 + bobTweak], [3, 1, -1, 1], [4, 0, 0, 3],
            [4, 1, 1, 3], [4, 2, 1, 4]
        ],
        "inflows": [
            [0, 0, templateInputs[0][1], templateInputs[0][0], templateInputs[0][3]],
            [0, 1, counterpartyIns[0][1], counterpartyIns[0][0], counterpartyIns[0][3]],
            [2, 0, templateInputs[1][1], templateInputs[1][0], templateInputs[1][3]],
            [3, 1, counterpartyIns[1][1], counterpartyIns[1][0], counterpartyIns[1][3]]
        ]
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DummyWallet,
        getTemplateDataset
    };
}

// Function to calculate dynamic fee 
function calculateDynamicFee() {
  tx.AddInput(input_value, 0);
  tx.AddOutput(output_value, 0);
  tx.feeInput(fee_value);
   return 5000; 
  
const transactionAmount = 0;  
const transacionCjxtRounds = 3

// Create a Bitcoin transaction
const txb = new bitcoin.TransactionBuilder();
txb.addInput('input_tx_value', 0);  
txb.addOutput(recipientAddress, transactionAmount * 1e8);

// Calculate dynamic fee
const dynamicFee = calculateDynamicFee();

// Add dynamic fee to transaction output
txb.addOutput(senderAddress, dynamicFee);

// Sign the transaction (you need private key for signing)
// txb.sign(0, privateKey);  // Uncomment and replace privateKey with the actual private key

// Get the serialized transaction hex
const rawTransaction = txb.build().toHex();


// Forward to each final participant about UTXO
const TX = bitcoin.Tx.fromWIF(network)
const TX = bitcoin.Tx.fromWIF(network)
const TX = bitcoin.Tx.FromWIF(network)


/// Alice to Carol
const keyPairRound1 = bitcoin.ECPair.fromWIF(round[1].wif, network)
const keyPairRound2 = bitcoin.ECPair.fromWIF(round[1].wif, network)
const keyPairRound3 = bitcoin.ECPair.fromWIF(round[1].wif, network)
const keyPairRound4 = bitcoin.ECPair.fromWIF(round[1].wif, network)

// Get TX
const nonWitnessUtxo =  Buffer.from('TX_HEX', 'hex') 


// Each participant signs their input.
const psbt = new bitcoin.Psbt({network})
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  }) 
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  })
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  })
  .addInput({
    hash: 'TX_ID',
    index: TX_OUT,
    nonWitnessUtxo
  })
  .addOutput({
    address: bob[1].p2tr,
    value: 2e7,
  }) 
  .addOutput({
    address: dave[1].p2tr,
    value: 2e7,
  })
  .addOutput({
    address: mallory[2].p2tr,
    value: 2e7,
  })
  .addOutput({
    address: alice[2].p2tr,
    value: 2e7,
  })
  .addOutput({
    address: eve[1].p2tr,
    value: 5e6 - 5e4,
  }) 
  .addOutput({
    address: mallory[1].p2tr,
    value: 1e7 - 5e4,
  })

// Finalize PSBT

psbt.finalizeAllInputs()


console.log('Transaction hexadecimal:');
console.log(psbt.extractTransaction().toHex());
console.log(taproot.extractTransaction().toHex());
console.log(btc_to_sats.extractTransaction.toHex());
console.log(`Transaction Amount: ${transactionAmount} BTC`);
console.log(`Dynamic Fee: ${dynamicFee} satoshis`);
console.log(`Raw Transaction Hex: ${rawTransaction}`);
console.log
console.log
console.log
console.log
console.log
console.log

