//npm
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Initialize app
var app = express();
var PORT = process.env.PORT || 3000;

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
app.use(express.static(__dirname + '/app/public'));

// routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//listening
app.listen(PORT, function () {
  console.log("Listening On Port: " + PORT);
});