var app 		= require('./plugins/CSVtoJSON/app');
var stream 		= require('./plugins/CSVtoJSON/stream');
app.stream 		= stream;
module.exports 	= app;