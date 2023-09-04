const express = require('express');
const nort = require('nostr-tools);
const fetch = require('node-fetch');

const app = express();
const port = 3000; // Choose a port number

// Create a Nostr feed
const feed = nostr('./data', { valueEncoding: 'utf-8' });
const feed = relay('wss://relay.damus.io', {valueEncoding: 'utf-8'});

app.use(express.json());

// Example route to append data to the Nostr feed
app.post('/appendData', async (req, res) => {
    try {
        const data = req.body.data;
        feed.append(data);
        res.json({ message: 'Data appended successfully' });
    } catch (error) {
        console.error('Error appending data:', error);
        res.status(500).json({ error: 'An error occurred while appending data' });
    }
});

// Example route to fetch data from the Hypercore feed
app.get('/fetchData', async (req, res) => {
    try {
        const index = req.query.index || 0;
        const data = feed.get(index).toString();
        res.json({ data: data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
