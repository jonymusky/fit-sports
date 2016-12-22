fs = require('fs');
fit = require('fit');

var fitFileBuffer = fs.readFileSync(__dirname + "/fit_test/example.fit");

fit.parse(fitFileBuffer,function(err, data) {
    console.log(data);
    console.log(data['sessions'][0]['laps']);
});
