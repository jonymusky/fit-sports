var express = require("express");
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// default options
app.use(fileUpload());
app.disable('etag');

var routesFit = require('./routes/fit');
app.use('/fit', routesFit);

app.use(express.static('dist'));

app.listen(process.env.PORT || 3004);
