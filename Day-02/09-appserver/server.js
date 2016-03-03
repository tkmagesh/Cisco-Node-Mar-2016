var http = require('http');

var dataParser = require('./dataParser');
var staticRequestHandler = require('./staticRequestHandler');
var calculatorRequestHandler = require('./calculatorRequestHandler');
var notFoundActionHandler = require('./notFoundActionHandler');

var middlewares = [dataParser, staticRequestHandler, calculatorRequestHandler, notFoundActionHandler];

var server = http.createServer(function(req, res){
	function exec(req, res, middlewares){
		var first = middlewares[0],
			remaining = middlewares.slice(1),
			next = function(){
				exec(req, res, remaining)
			};
		if (first)
			first(req, res, next);
	}
	exec(req, res, middlewares);
});

server.listen(8080);
console.log('server listening on port 8080');