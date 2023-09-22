// index.js

// Import the localStorage functions from the localStorage.js module
const {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
} = require('./localStorage');

// Set data in localStorage
setLocalStorageItem('username', 'john_doe');

// Get data from localStorage
const username = getLocalStorageItem('username');
console.log(`Username: ${username}`);

// Remove data from localStorage
removeLocalStorageItem('username');

