// implement your API here
const express = require('express'); // import the express package
const data = require('./data/db')

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Its working');
});

// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);

server.get('/api/users', (req, res) => {
  data.find();
    res.end();
  });