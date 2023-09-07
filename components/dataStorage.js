// Create a DataStorage object using a JavaScript object
const DataStorage = {
  data: {},
  
  // Method to set data
  setData: function(key, value) {
    this.data[key] = value;
  },
  
  // Method to get data
  getData: function(key) {
    return this.data[key];
  },
  
  // Method to delete data
  deleteData: function(key) {
    delete this.data[key];
  },
  
  // Method to check if data exists
  hasData: function(key) {
    return key in this.data;
  },
  
  // Method to get all keys
  getAllKeys: function() {
    return Object.keys(this.data);
  }
};

// Example usage:
DataStorage.setData('name', 'John');
DataStorage.setData('age', 30);

console.log(DataStorage.getData('name')); // Output: "John"
console.log(DataStorage.hasData('age'));   // Output: true

DataStorage.deleteData('age');
console.log(DataStorage.hasData('age'));   // Output: false

console.log(DataStorage.getAllKeys());     // Output: ["name"]

