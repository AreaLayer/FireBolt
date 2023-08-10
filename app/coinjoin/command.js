const bitcoin = require('bitcoinjs-lib');
const { Command, Boolean } = require('twisted.protocols.amp');
const OCC_SETUP_COMMAND = 'OCCSetup';
const OCC_KEYS_COMMAND = 'OCCKeys';
const OCC_SIGS_COMMAND = 'OCCSigs';
const OCC_SETUP_RESPONSE_COMMAND = 'OCCSetupResponse';
const OCC_KEYS_RESPONSE_COMMAND = 'OCCKeysResponse';
const OCC_SIGS_RESPONSE_COMMAND = 'OCCSigsResponse';

class DaemonNotReady extends Error {}

class OCCCommand extends Command {
    constructor() {
        super();
        this.response = [['accepted', Boolean]];
    }
}

class OCCSetup extends OCCCommand {
    constructor() {
        super();
        this.arguments = [['amtdata', String]];
    }
}

class OCCKeys extends OCCCommand {
    constructor() {
        super();
        this.arguments = [
            ['template_ins', String],
            ['our_keys', String],
            ['template_data', String]
        ];
    }
}

class OCCSigs extends OCCCommand {
    constructor() {
        super();
        this.arguments = [['our_sigs', String]];
    }
}

class OCCSetupResponse extends OCCCommand {
    constructor() {
        super();
        this.arguments = [['template_ins', String]];
    }
}

class OCCKeysResponse extends OCCCommand {
    constructor() {
        super();
        this.arguments = [
            ['our_keys', String],
            ['our_sigs', String]
        ];
    }
}

class OCCSigsResponse extends OCCCommand {
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

