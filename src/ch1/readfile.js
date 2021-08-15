const fs = require('fs');

// Sync Reading
const data = fs.readFileSync('./text/sample.txt', 'utf-8');
console.log(data);

// Async Reading
fs.readFile('./text/sample.txt', 'utf-8', (err, data) => {
  console.log(data);
});
