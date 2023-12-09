/// Create web server and listen to port 3000
var express = require('express');
var app = express();
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});

// Path: comments.js
/// Enable CORS (Cross-Origin Resource Sharing)
var cors = require('cors');
app.use(cors());

// Path: comments.js
/// Parse JSON bodies of POST requests
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Path: comments.js
/// Get the list of comments
app.get('/comments', function (req, res) {
    res.send(comments);
});

// Path: comments.js
/// Add a new comment
app.post('/comments', function (req, res) {
    var comment = req.body;
    comment.id = comments.length;
    comments.push(comment);
    res.send(comment);
});

// Path: comments.js
/// Delete a comment
app.delete('/comments/:id', function (req, res) {
    var id = parseInt(req.params.id);
    comments.splice(id, 1);
    res.send(comments);
});

// Path: comments.js
/// Update a comment
app.put('/comments/:id', function (req, res) {
    var id = parseInt(req.params.id);
    var comment = req.body;
    comments[id] = comment;
    res.send(comment);
});

// Path: comments.js
/// Array of comments
var comments = [];