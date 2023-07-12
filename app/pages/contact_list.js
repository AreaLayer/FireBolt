const nostr = require('nostr-tools');
const tbd = require('web5-js');
const {PubKey} = require('nostr-tools');

const contacts = [
  {
    name: 'John Doe',
    nostr: {
      npubKey: 'Npb12', // Example NPub key
      relay: 'https://relay.damus.io/' // Example relay URL
    },
    web5: {
      did: 'did:ion:EiD7Qq48bOQ16zH_hg8U4...', // Example DID
      explorer: 'https://identity.foundation/ion/explorer/did:ion:EiD7Qq48bOQ16zH_hg8U4...' // Example explorer URL
    }
  },
  {
    name: 'Jane Smith',
    nostr: {
      npubKey: 'Npb12', // Example NPub key
      relay: 'https://relay.damus.io/' // Example relay URL
    },
    web5: {
      did: 'did:ion:EiD7Qq48bOQ16zH_hg8U4...', // Example DID
      explorer: 'https://identity.foundation/ion/explorer/did:ion:EiD7Qq48bOQ16zH_hg8U4...' // Example explorer URL
    }
  }
];

// Accessing Contact Information
console.log('Contact 1 Name:', contacts[0].name);
console.log('Contact 1 Nostr NPub Key:', contacts[0].nostr.npubKey);
console.log('Contact 1 Nostr Relay:', contacts[0].nostr.relay);
console.log('Contact 1 Web 5 DID:', contacts[0].web5.did);
console.log('Contact 1 Web 5 Explorer:', contacts[0].web5.explorer);

    
  
  
  
