var url = require('url');
module.exports = function(req, res){
	req.url = req.url === '/' ? '/index.html' : req.url;
	req.urlObj = url.parse(req.url, true);
};
