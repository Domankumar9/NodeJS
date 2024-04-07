const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // Read file asynchronously
  fs.readFile('/NodeJS/NodeJS/data/data.json', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    }
  });
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
