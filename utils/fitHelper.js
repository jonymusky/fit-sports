var fs = require('fs');
var fit = require('fit');
var path = require('path');
module.exports = {
  readAndParse: function(file, format, callback){
    var fitFileBuffer = fs.readFileSync(path.normalize(__dirname + "/../fit_test/"+file));
    return this.readAndParseBuffer(fitFileBuffer, format, callback);
  },
  readAndParseBuffer: function(buffer, format, callback){
    fit.parse(buffer,function(err, data) {
      if(format !== 'JSON'){
        //For the moment the other format is CSV
        var json2csv = require('json2csv');
        try {
          var result = json2csv({ data: data});
          callback(result);
        } catch (err) {
          // Errors are thrown for bad options, or if the data is empty and no fields are provided.
          // Be sure to provide fields if it is possible that your data array will be empty.
          callback(JSON.stringify(err));
        }
      }else{
        callback(JSON.stringify(data));
      }
    });
  }
};
