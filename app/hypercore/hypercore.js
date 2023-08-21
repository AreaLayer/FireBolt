const hyperdrive = require('@holepunch/hyperdrive');
const Corestore = require('corestore');
const hypercore = require('hypercore'); // Add Hypercore import
const { replicate } = require('@holepunch/replication'); // Add replication import

const store = new Corestore('./backup.js')
const drive = new Hyperdrive(store)

// Create a Hypercore feed
const feed = hypercore(store, { valueEncoding: 'utf-8' });

(async () => {

  // Create a new Hypercore feed
  const newFeed = feed.subfeed('my-subfeed');

  // Write data to the new feed
  await newFeed.append('data for my subfeed');

  // Read data from the new feed
  const readData = await newFeed.get(0);
  console.log('Data from subfeed:', readData.toString());

  // Replicate the feed with another peer
  const replicationStream = replicate(feed);
  replicationStream.pipe(/* your replication target */);
})();
