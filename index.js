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
  data.find()
    .then(users => res.status(200).json(users));
  });

server.get(`/api/users/:id`, (req, res) => {
  data.findById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
      }
    })
  });  