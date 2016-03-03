var http = require('http');

var dataParser = require('./dataParser');
var staticRequestHandler = require('./staticRequestHandler');
var calculatorRequestHandler = require('./calculatorRequestHandler');
var notFoundActionHandler = require('./notFoundActionHandler');

var server = http.createServer(function(req, res){
	dataParser(req, res);
	staticRequestHandler(req, res);
	calculatorRequestHandler(req, res);
	notFoundActionHandler(req, res);
});

server.listen(8080);
console.log('server listening on port 8080');