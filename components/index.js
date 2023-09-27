// Import any necessary modules or dependencies
// For example, if you're using Node.js, you might use 'require'

// Example 1: Using the DataStorage object from the previous example
const DataStorage = require('./DataStorage'); // If DataStorage is in a separate module

// Initialize your application
function initApp() {
  // Perform any setup or configuration here
  
  // Use DataStorage to store and retrieve data
  DataStorage.setData('name', 'John');
  DataStorage.setData('age', 30);
  
  // Example: Display data
  console.log(`Name: ${DataStorage.getData('name')}`);
  console.log(`Age: ${DataStorage.getData('age')}`);
}

// Start your application
initApp();

