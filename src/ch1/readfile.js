const fs = require('fs');

// Sync Reading
const data = fs.readFileSync('./text/sample.txt', 'utf-8');
console.log(data);

// Process after asynchronically reading a file
const readHandler = (err, data) => {
  console.log(data);
};
// Async Reading
fs.readFile('./text/sample.txt', 'utf-8', readHandler);
