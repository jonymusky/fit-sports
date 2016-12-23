
var express = require('express');
var router = express.Router();
var fitHelper = require('../utils/fitHelper');

router.post('/upload', function(req, res) {
  var sampleFile;
  var format = req.body.format || 'JSON';
  var output = req.body.output || 'VIEW';

  if (!req.files) {
          res.send('No files were uploaded.');
          return;
  }
  sampleFile = req.files.sampleFile;
  fitHelper.readAndParseBuffer(sampleFile.data, format, function(data){
      if(output != 'VIEW'){
        res.setHeader('Content-disposition', 'attachment; filename='+sampleFile.name+'.'+format.toLowerCase());
      }
      res.end(data);
  });
});

router.get("/example/laps", function(req, res) {
  var format = 'JSON';
  fitHelper.readAndParse('example.fit', format, function(data){
    data = JSON.parse(data);
    res.end(JSON.stringify(data.sessions[0].laps));
  });
});

router.get("/example", function(req, res) {
  var format = req.query.format || 'JSON';
  fitHelper.readAndParse('example.fit', format, function(data){
    res.end(data);
  });
});



module.exports = router;
