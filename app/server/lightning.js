const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000; // Choose a port number

app.use(bodyParser.json());

// Define the base URL of your LND server
const lndBaseUrl = 'http://localhost:8080'; // Replace with your LND server's URL

// Example route to get information about your node
app.get('/getinfo', async (req, res) => {
    try {
        const response = await fetch(`${lndBaseUrl}/v1/getinfo`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
