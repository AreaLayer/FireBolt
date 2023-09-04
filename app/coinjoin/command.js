const bitcoin = require('bitcoinjs-lib');
const { Command, Boolean } = require('twisted.protocols.amp');
const OC_SETUP_COMMAND = 'OCSetup';
const OC_KEYS_COMMAND = 'OCKeys';
const OC_SIGS_COMMAND = 'OCSigs';
const OC_SETUP_RESPONSE_COMMAND = 'OCSetupResponse';
const OC_KEYS_RESPONSE_COMMAND = 'OCKeysResponse';
const OC_SIGS_RESPONSE_COMMAND = 'OCSigsResponse';

class DaemonNotReady extends Error {}

class OCCommand extends Command {
    constructor() {
        super();
        this.response = [['accepted', Boolean]];
    }
}

class OCSetup extends OCCCommand {
    constructor() {
        super();
        this.arguments = [['amtdata', String]];
    }
}

class OCKeys extends OCCommand {
    constructor() {
        super();
        this.arguments = [
            ['template_ins', String],
            ['our_keys', String],
            ['template_data', String]
        ];
    }
}

class OCSigs extends OCCCommand {
    constructor() {
        super();
        this.arguments = [['our_sigs', String]];
    }
}

class OCSetupResponse extends OCCommand {
    constructor() {
        super();
        this.arguments = [['template_ins', String]];
    }
}

class OCKeysResponse extends OCCommand {
    constructor() {
        super();
        this.arguments = [
            ['our_keys', String],
            ['our_sigs', String]
        ];
    }
}

class OCSigsResponse extends OCCommand {
    constructor() {
        super();
        this.arguments = [['funding_sigs', String]];
    }
}

const commands = {
    [OCC_SETUP_COMMAND]: OCCSetup,
    [OCC_KEYS_COMMAND]: OCCKeys,
    [OCC_SIGS_COMMAND]: OCCSigs,
    [OCC_SETUP_RESPONSE_COMMAND]: OCCSetupResponse,
    [OCC_KEYS_RESPONSE_COMMAND]: OCCKeysResponse,
    [OCC_SIGS_RESPONSE_COMMAND]: OCCSigsResponse,
};

module.exports = {
    DaemonNotReady,
    OCCSetup,
    OCCKeys,
    OCCSigs,
    OCCSetupResponse,
    OCCKeysResponse,
    OCCSigsResponse,
    commands,
};

