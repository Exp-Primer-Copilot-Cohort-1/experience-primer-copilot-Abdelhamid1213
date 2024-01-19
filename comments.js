// Create a web server
// Importing the express library
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Importing the comments.js file
const comments = require('./comments');
const Contact = require('./contact');

// Creating a web server
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all comments
app.get('/api/comments', (req, res) => {
  res.send(comments.getComments());
});

// Get a comment by id
app.get('/api/comments/:id', (req, res) => {
  const comment = comments.getComment(req.params.id);
  if (comment) {
    res.send(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create a new comment
app.post('/api/comments', (req, res) => {
  const comment = req.body;
  comments.addComment(comment);
  res.send(comment);
});

// Delete a comment
app.delete('/api/comments/:id', (req, res) => {
  comments.deleteComment(req.params.id);
  res.send('Comment deleted');
});

app.get('/api/contact', (req, res) => {
  res.send(Contact.getContact());
});

app.post('/api/contact', (req, res) => {
  const contact = req.body;
  Contact.addContact(contact);
  res.send(contact);
});

// Listen to port 3000
app.listen(3000, () => console.log('Server listening on port 3000!'));