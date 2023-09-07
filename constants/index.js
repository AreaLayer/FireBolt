// index.js

// Import the localStorage functions and constants from the localStorage.js module
const {
  LOCAL_STORAGE_KEYS,
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
} = require('./localStorage');

// Set data in localStorage using constants
setLocalStorageItem(LOCAL_STORAGE_KEYS.USERNAME, 'john_doe');
setLocalStorageItem(LOCAL_STORAGE_KEYS.EMAIL, 'john@example.com');

// Get and display data from localStorage using constants
const username = getLocalStorageItem(LOCAL_STORAGE_KEYS.USERNAME);
const email = getLocalStorageItem(LOCAL_STORAGE_KEYS.EMAIL);
console.log(`Username: ${username}`);
console.log(`Email: ${email}`);

// Remove data from localStorage using constants
removeLocalStorageItem(LOCAL_STORAGE_KEYS.USERNAME);


