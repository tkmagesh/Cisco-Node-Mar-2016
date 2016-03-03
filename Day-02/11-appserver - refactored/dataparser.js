var url = require('url'),
	qs = require('querystring');
	
module.exports = function(req, res, next){
	req.url = req.url === '/' ? '/index.html' : req.url;
	req.urlObj = url.parse(req.url, true);
	req.body = {};
	if (req.method === 'POST'){
		var reqString = '';
		req.on('data', function(chunk){
			reqString += chunk;
		});
		req.on('end', function(){
			req.body = qs.parse(reqString);
			next();
		});
	} else {
		next();
	}
};
