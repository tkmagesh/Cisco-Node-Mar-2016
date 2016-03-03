var calculator = require('./calculator');
var qs = require('querystring');

module.exports = function(req, res){
	var urlObj = req.urlObj;
	if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var op = urlObj.query.op,
			n1 = parseInt(urlObj.query.n1),
			n2 = parseInt(urlObj.query.n2);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var reqString = '';
		req.on('data', function(chunk){
			reqString += chunk;
		});
		req.on('end', function(){
			var query = qs.parse(reqString);
			var op = query.op,
				n1 = parseInt(query.n1),
				n2 = parseInt(query.n2);
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		})
		
	}
};