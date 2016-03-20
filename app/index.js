var express = require('express');
var app = express();


app.get('/', function(request, response) {
   var motivation = require('motivations');
   response.send(motivation[3]);
});


app.get('/Hello', function(request, response) {
   response.send("Hello there!!");
});

module.exports = app;
