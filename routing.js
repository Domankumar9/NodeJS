const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Extract the URL and HTTP method from the request
  const { url, method } = req;

  // Define routes and corresponding request handlers
  if (url === '/' && method === 'GET') {
    // Handle GET request to the root URL
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the homepage!\n');
  } else if (url === '/about' && method === 'GET') {
    // Handle GET request to the /about URL
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('About page\n');
  } else {
    // Handle other requests (404 Not Found)
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found\n');
  }
});

// Specify the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
