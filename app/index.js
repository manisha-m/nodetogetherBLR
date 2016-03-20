var express = require('express');
var app = express();

app.get('/', function(request, response) {
   response.send("Got the root!!");
});


app.get('/Hello', function(request, response) {
   response.send("Hello there!!");
});

module.exports = app;
