// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/api'))

// Start Server
app.listen(3000)
console.log('api is working on port 3000')