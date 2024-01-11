var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


// static page
app.use(express.static(path.join(__dirname, './docs')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start server
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
