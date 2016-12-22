var fs = require('fs');
var fit = require('fit');
var express = require('express');
var router = express.Router();
var path = require('path');


router.get("/example", function(req, res) {
  var fitFileBuffer = fs.readFileSync(path.normalize(__dirname + "/../fit_test/example.fit"));
  fit.parse(fitFileBuffer,function(err, data) {
    return res.end(JSON.stringify(data));
  });
});
module.exports = router;
