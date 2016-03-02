var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var calculator = require('./calculator');

var staticResourceExtns = ['.html', '.js', '.css', '.png', '.jpg', '.ico', '.xml', '.json'];

function isStatic(resourceName){
	var resourceExtn = path.extname(resourceName);
	return staticResourceExtns.indexOf(resourceExtn) !== -1;
}
var server = http.createServer(function(req, res){
	req.url = req.url === '/' ? '/index.html' : req.url;
	var urlObj = url.parse(req.url, true);
	if (isStatic(urlObj.pathname)){
		var resource = path.join(__dirname , urlObj.pathname)
		if (!fs.existsSync(resource)){
			res.writeHead(404);
			res.end();
			return;
		}
		var stream = fs.createReadStream(resource);
		stream.pipe(res);
	} else if (urlObj.pathname === '/calculator'){
		var op = urlObj.query.op,
			n1 = parseInt(urlObj.query.n1),
			n2 = parseInt(urlObj.query.n2);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(8080);
console.log('server listening on port 8080');