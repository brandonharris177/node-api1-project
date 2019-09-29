// implement your API here
const http = require('http'); // built in node.js module to handle http traffic

const hostname = '127.0.0.1'; // the local computer where the server is running
const port = 5000; // a port we'll use to watch for traffic

const server = http.createServer((req, res) => {
  // creates our server
});

server.listen(port, hostname, () => {
  // start watching for connections on the port specified
  console.log(`Server running at http://${hostname}:${port}/`);
});