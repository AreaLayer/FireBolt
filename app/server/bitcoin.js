const express = require('express');
const bodyParser = require('body-parser');
const bitcoin = require('bitcoinjs-lib');
const fetch = require('node-fetch');

const app = express();
const port = 3000; // Choose a port number

app.use(bodyParser.json());

// Example route to generate a new Bitcoin address
app.get('/generateAddress', (req, res) => {
    try {
        const keyPair = bitcoin.ECPair.makeRandom();
        const address = keyPair.getAddress();
        res.json({ address: address, publicKey: keyPair.publicKey.toString('hex') });
    } catch (error) {
        console.error('Error generating address:', error);
        res.status(500).json({ error: 'An error occurred while generating an address' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

