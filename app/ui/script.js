// Wallet App
const pages = ['home', 'backup', 'checklist', 'contactList', 'pinCover'];

// Show a page
function showPage(pageId) {
  for (const page of pages) {
    document.getElementById(page).classList.remove('visible');
  }
  document.getElementById(pageId).classList.add('visible');
}

// Home page
document.getElementById('createWallet').addEventListener('click', function() {
  // TODO: Implement wallet creation logic
  console.log('Create Wallet clicked');
});

document.getElementById('importWallet').addEventListener('click', function() {
  // TODO: Implement wallet import logic via BIP-39
  const 
  console.log('Import Wallet clicked');
});

// Backup page
document.getElementById('backupButton').addEventListener('click', function() {
  // TODO: Implement wallet backup logic
  console.log('Backup Now clicked');
});

// Checklist page
document.getElementById('addItemButton').addEventListener('click', function() {
  // TODO: Implement logic to add checklist items
  console.log('Add Item clicked');
});

// Contact List page
document.getElementById('addContactButton').addEventListener('click', function() {
  // TODO: Implement logic to add contacts
  console.log('Add Contact clicked');
});

// PIN Cover page
document.getElementById('unlockButton').addEventListener('click', function() {
  const pin = document.getElementById('pinInput').value;
  // TODO: Implement PIN verification logic
  console.log('Unlock clicked');
});

// Initially show the Home page
showPage('home');

