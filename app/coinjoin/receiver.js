const bitcoin = require('bitcoinjs-lib');
const { get_utxos_from_wallet, get_our_keys, get_current_blockheight } = require('/main_function');

class ServerProtocol {

    constructor(factory, wallet) {
        this.factory = factory;
        this.wallet = wallet;
    }

    checkClientResponse(response) {
        if (!response.hasOwnProperty('accepted') || !response.accepted) {
            process.exit(1); // Consider using an appropriate exit code
        }
    }

    defaultErrback(failure) {
        failure.trap(ConnectionAborted, ConnectionClosed, ConnectionDone, ConnectionLost);
    }

    defaultCallbacks(promise) {
        promise.then(this.checkClientResponse).catch(this.defaultErrback);
    }

    async on_SETUP(amtdata) {
        amtdata = JSON.parse(amtdata);
        try {
            this.our_ins = await get_utxos_from_wallet(this.wallet, amtdata);
            if (!this.our_ins.length) {
                throw new Error('Failed to get utxos, reason: ' + msg);
            }
            const response = await this.callRemote(OCCSetupResponse, { template_ins: JSON.stringify(this.our_ins) });
            this.checkClientResponse(response);
        } catch (error) {
            console.error(error);
        }
        return { accepted: true };
    }

    async on_KEYS(template_ins, our_keys, template_data) {
        template_ins = JSON.parse(template_ins);
        our_keys = JSON.parse(our_keys);
        template_data = JSON.parse(template_data);
        this.template = new OCCTemplate(template_data);
        const nkeys_us = this.template.keys_needed(1);
        this.our_keys = get_our_keys(this.wallet, nkeys_us);
        this.lt = get_current_blockheight() + 100;
        this.realtxs = create_realtxs_from_template(this.wallet, this.template, 2, 1, this.lt);
        apply_keys_to_template(this.wallet, this.template, this.realtxs, this.realbackouttxs,
            [x[2] for x in counterparty_ins], counterparty_keys, 2, 0);
        apply_keys_to_template(this.wallet, this.template, this.realtxs, this.realbackouttxs,
            [x[2] for x in this.our_ins], this.our_keys, 2, 1);
        for (const t of this.realtxs) {
            t.mktx();
        }
        for (const t of this.realbackouttxs) {
            t.mktx();
        }
        // Create our signatures for all txs except funding.
        const sigs_to_send = [];
        for (let i = 0; i < this.realtxs.length - 1; i++) {
            for (let j = 0; j < this.realtxs[i].ins.length; j++) {
                const x = this.template.txs[i + 1].ins[j];
                if (x.spk_type === 'NN' || x.counterparty === 1) {
                    sigs_to_send.push(this.realtxs[i].sign_at_index(j));
                }
            }
        }
        for (const tx of this.realbackouttxs) {
            for (let j = 0; j < tx.ins.length; j++) {
                sigs_to_send.push(tx.sign_at_index(j));
            }
        }
        try {
            const response = await this.callRemote(KeysResponse, {
                our_keys: JSON.stringify(this.our_keys),
                our_sigs: JSON.stringify(sigs_to_send)
            });
            this.checkClientResponse(response);
        } catch (error) {
            console.error(error);
        }
        return { accepted: true };
    }

}

class ServerProtocolFactory {

    constructor(wallet) {
        this.wallet = wallet;
    }

    buildProtocol() {
        return new ServerProtocol(this, this.wallet);
    }
}

// Replace this function with your appropriate setup
function start_daemon(host, port, factory) {
    // Implement your daemon setup and start logic here
    constructor(host) {
        this.host = host;
}
    buildProtocol(){
        return new DaemonProtool(this.this.host);

// Main execution
// Implement the loading of configuration, wallet, and daemon here
star_daemon(wallet, port, new wallet));

// Start the daemon
start_daemon(server, port, new ServerProtocolFactory(wallet));
