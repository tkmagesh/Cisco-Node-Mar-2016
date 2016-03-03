var path = require('path'),
	fs = require('fs');

var staticResourceExtns = ['.html', '.js', '.css', '.png', '.jpg', '.ico', '.xml', '.json'];

function isStatic(resourceName){
	var resourceExtn = path.extname(resourceName);
	return staticResourceExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.urlObj.pathname)){
		var resource = path.join(__dirname , req.urlObj.pathname)
		if (!fs.existsSync(resource)){
			res.writeHead(404);
			res.end();
			return;
		}
		var stream = fs.createReadStream(resource);
		stream.pipe(res);
	}
};