const os = require('os');
const path = require('path');
const fs = require('fs');
const { JsonRpc } = require('jsonrpc-bidirectional');
const { BitcoinCoreInterface, RegtestBitcoinCoreInterface } = require('bitcoinjs-lib');

const defaultConfig = `
[LOGGING]
console_log_level = INFO;

[BLOCKCHAIN]
blockchain_source = bitcoin-rpc
network = testnet
rpc_host = 330
rpc_port = 8332;

const globalSingleton = {
    config: {
        read() {},
        get() {},
    },
    homedir: '',
    config_location: 'config.firebolt',
    bc_interface: null,
    console_log_level: '',
};

function lookupAppdataFolder() {
    if (process.platform === 'darwin') {
        return path.join(os.homedir(), 'Library', 'Application Support', 'YourAppName') + '/';
    } else if (process.platform === 'win32' || process.platform === 'win64') {
        return path.join(process.env.APPDATA, 'YourAppName') + '\\';
    } else {
        return path.join(os.homedir(), '.' + 'YourAppName' + '/');
    }
}

function loadCoinjoinxtConfig(configPath = null, bs = null) {
    globalSingleton.config.read = function () {
        return [Buffer.from(defaultConfig)];
    };

    if (!configPath) {
        globalSingleton.homedir = lookupAppdataFolder();
    } else {
        globalSingleton.homedir = configPath;
    }

    if (!fs.existsSync(globalSingleton.homedir)) {
        fs.mkdirSync(globalSingleton.homedir, { recursive: true });
    }

    if (!fs.existsSync(path.join(globalSingleton.homedir, 'wallets'))) {
        fs.mkdirSync(path.join(globalSingleton.homedir, 'wallets'), { recursive: true });
    }

    if (!fs.existsSync(path.join(globalSingleton.homedir, 'logs'))) {
        fs.mkdirSync(path.join(globalSingleton.homedir, 'logs'), { recursive: true });
    }

    globalSingleton.config_location = path.join(globalSingleton.homedir, globalSingleton.config_location);

    let loadedFiles = globalSingleton.config.read([globalSingleton.config_location]);

    if (loadedFiles.length !== 1) {
        fs.writeFileSync(globalSingleton.config_location, defaultConfig);
    }

    // Configure the interface to the blockchain on startup
    globalSingleton.bc_interface = getBlockchainInterfaceInstance(globalSingleton.config);

    // Set the console log level and initialize console logger
    try {
        globalSingleton.console_log_level = globalSingleton.config.get('LOGGING', 'console_log_level');
    } catch (error) {
        console.log('No log level set, using default level INFO ');
    }

    console.log('Setting console level to: ', globalSingleton.console_log_level);

    // Replace with your logging implementation
    // consoleHandler.setLevel(globalSingleton.console_log_level);
    // log.addHandler(consoleHandler);

    // Inject the configuration to the underlying jmclient code
    setConfig(globalSingleton.config, { bcint: globalSingleton.bc_interface });
}

function getBlockchainInterfaceInstance(_config) {
    const source = _config.get('BLOCKCHAIN', 'blockchain_source');
    const network = _config.get('BLOCKCHAIN', 'network');
    const testnet = network === 'testnet';
    const mainnet = network === 'mainnet';
    const rpc_host = _config.get('BLOCKCHAIN', 'rpc_host');
    const rpc_port = _config.get('BLOCKCHAIN', 'rpc_port');
    const rpc_user = _config.get('BLOCKCHAIN', 'rpc_user');
    const rpc_password = _config.get('BLOCKCHAIN', 'rpc_password');
    const rpc = new JsonRpc(rpc_host, rpc_port, rpc_user, rpc_password);

    let bc_interface;

    if (source === 'bitcoin-rpc') {
        bc_interface = new BitcoinCoreInterface(rpc, network);
    } else if (source === 'regtest') {
        bc_interface = new RegtestBitcoinCoreInterface(rpc);
    }

    return bc_interface;
}

// Load the coinjoinxt config and perform necessary setup
let LoadCoinjoinxtConfig =  const loadCoinjoinxtConfig;
loadCoinjoinxtConfig();