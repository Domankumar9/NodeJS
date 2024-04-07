const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code and content type
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body
  res.end('Hello, World!\n');
});

// Specify the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
