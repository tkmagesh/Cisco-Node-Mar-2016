var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

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
		res.write('Coming soon..!');
		res.end();
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(8080);
console.log('server listening on port 8080');