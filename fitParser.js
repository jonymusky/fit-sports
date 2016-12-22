var app = require("express")();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var routesFit = require('./routes/fit');
app.use('/fit', routesFit);

app.listen(process.env.PORT || 3002);
