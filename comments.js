// Create web server
// 1. Load the express module
// 2. Create a new express server
// 3. Create a route to handle GET requests to the root URL
// 4. Create a route to handle POST requests to the root URL
// 5. Create a route to handle GET requests to the /comments/:id URL
// 6. Create a route to handle PUT requests to the /comments/:id URL
// 7. Create a route to handle DELETE requests to the /comments/:id URL
// 8. Start the server

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var comments = {
    1: 'First comment!',
    2: 'Second comment!',
    3: 'Third comment!'
};

app.get('/comments', function(req, res) {
    res.send(comments);
});

app.post('/comments', function(req, res) {
    var id = Object.keys(comments).length + 1;
    comments[id] = req.body.comment;
    res.send({id: id});
});

app.get('/comments/:id', function(req, res) {
    res.send(comments[req.params.id]);
});

app.put('/comments/:id', function(req, res) {
    comments[req.params.id] = req.body.comment;
    res.send(comments[req.params.id]);
});

app.delete('/comments/:id', function(req, res) {
    delete comments[req.params.id];
    res.sendStatus(200);
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});