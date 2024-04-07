const fs = require('fs');
// Non-blocking code: reading a file asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('File read operation initiated.');
