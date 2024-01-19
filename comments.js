// Create a web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Comment = require('./models/comment');

var db = mongoose.connect('mongodb://localhost/comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/comments', function(req, res) {
    Comment.find(function(err, comments) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' });
        } else {
            res.json(comments);
        }
    });
});

app.get('/comments/:id', function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' });
        } else {
            res.json(comment);
        }
    });
});

app.post('/comments', function(req, res) {
    var comment = new Comment();
    comment.author = req.body.author;
    comment.text = req.body.text;
    comment.save(function(err, comment) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' });
        } else {
            res.json(comment);
        }
    });
});

app.put('/comments/:id', function(req, res) {
    Comment.findByIdAndUpdate(req.params.id, {
        $set: {

