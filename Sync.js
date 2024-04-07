const fs = require('fs');
// Blocking code: reading a file synchronously
const data = fs.readFileSync('input.txt', 'utf8');
console.log(data);
console.log('File read operation complete.');
