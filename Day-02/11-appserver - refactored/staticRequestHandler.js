var path = require('path'),
	fs = require('fs');

var staticResourceExtns = ['.html', '.js', '.css', '.png', '.jpg', '.ico', '.xml', '.json'];

function isStatic(resourceName){
	var resourceExtn = path.extname(resourceName);
	return staticResourceExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(resourcePath){
	console.log('base path -> ', resourcePath);
	return function(req, res, next){
		if (isStatic(req.urlObj.pathname)){
			var resource = path.join(resourcePath, req.urlObj.pathname)
			if (!fs.existsSync(resource)){
				res.writeHead(404);
				res.end();
				return;
			}
			var stream = fs.createReadStream(resource);
			stream.pipe(res);
			/*stream.on('open', function(){
				console.log('stream opened');
			});
			stream.on('data', function(chunk){
				console.log('stream data written');
				res.write(chunk);
			});
			stream.on('end', function(){
				console.log('stream ended');
				res.end();
			});*/
		} else {
			next();
		}
	}
};