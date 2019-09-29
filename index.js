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

server.post('/api/users', (req, res) => {
  data.insert(req.body)
    .then(user => data.findById(user.id))
    .then(userID => {
      res.status(201).json(data.findById(userID))
    }).catch(error => {
      res.status(500).json({error: "There was an error while saving the user to the database"})
    }
    )
  });

server.get('/api/users', (req, res) => {
  data.find()
    .then(users => res.status(200).json(users)
    ).catch(error => {
      res.status(500).json({ error: "The user information could not be retrieved." })
    }
    )
  });

server.get(`/api/users/:id`, (req, res) => {
  data.findById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
      }
    }).catch(error => {
      res.status(500).json({ error: "The user information could not be retrieved." })
    }
    )
  });  