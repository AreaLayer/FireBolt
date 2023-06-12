const hyperdrive = require('@holepunch/hyperdrive');
const Corestore = require('corestore');
const firebolt = requrie('backup');
const firebolt = require('seed');

const store = new Corestore('./backup.js')
const drive = new Hyperdrive(store)

await drive.put('/backup.js', Buffer.from(''))

const buffer = await drive.get('/bakcup.js')
console.log(buffer) // => <backupr ..> "example"

const entry = await drive.entry('/backu.js)
console.log(entry) // => { seq, key, value: { executable, linkname, blob, metadata } }

await drive.del('/images/old-logo.png')

await drive.symlink('/images/logo.shortcut', '/images/logo.png')

for await (const file of drive.list('/images')) {
  console.log('list', file) // => { key, value }
}

const rs = drive.createReadStream('/blob.txt')
for await (const chunk of rs) {
  console.log('rs', chunk) // => <Buffer ..>
}

const ws = drive.createWriteStream('/blob.txt')
ws.write('new example')
ws.end()
ws.once('close', () => console.log('file saved'))
