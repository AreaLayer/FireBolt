const {Keys,Sigs } = require('bitcoinjs-lib');
const { Command, Boolean } = require('twisted.protocols.amp');
const OC_SETUP_COMMAND = 'Setup';
const OC_KEYS_COMMAND = 'Keys';
const OC_SIGS_COMMAND = 'Sigs';
const OC_SETUP_RESPONSE_COMMAND = 'SetupResponse';
const OC_KEYS_RESPONSE_COMMAND = 'KeysResponse';
const OC_SIGS_RESPONSE_COMMAND = 'SigsResponse';

class DaemonNotReady extends Error {}

class Command extends Command {
    constructor() {
        super();
        this.response = [['accepted', Boolean]];
    }
}

class Setup extends OCCCommand {
    constructor() {
        super();
        this.arguments = [['amtdata', String]];
    }
}

class Keys extends Command {
    constructor() {
        super();
        this.arguments = [
            ['template_ins', String],
            ['our_keys', String],
            ['template_data', String]
        ];
    }
}

class Sigs extends OCCCommand {
    constructor() {
        super();
        this.arguments = [['our_sigs', String]];
    }
}

class SetupResponse extends OCCommand {
    constructor() {
        super();
        this.arguments = [['template_ins', String]];
    }
}

class KeysResponse extends OCCommand {
    constructor() {
        super();
        this.arguments = [
            ['our_keys', String],
            ['our_sigs', String]
        ];
    }
}

class SigsResponse extends OCCommand {
    constructor() {
        super();
        this.arguments = [['funding_sigs', String]];
    }
}

const commands = {
    [SETUP_COMMAND]: Setup,
    [KEYS_COMMAND]: Keys,
    [SIGS_COMMAND]: Sigs,
    [SETUP_RESPONSE_COMMAND]: SetupResponse,
    [KEYS_RESPONSE_COMMAND]: KeysResponse,
    [SIGS_RESPONSE_COMMAND]: SigsResponse,
};

module.exports = {
    DaemonNotReady,
    Setup,
    Keys,
    Sigs,
    SetupResponse,
    KeysResponse,
    SigsResponse,
    commands,
};

