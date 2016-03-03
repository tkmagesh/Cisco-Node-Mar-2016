var calculator = require('./calculator');
var qs = require('querystring');

module.exports = function(req, res, next){
	var urlObj = req.urlObj;
	if (urlObj.pathname === '/calculator'){
		var data = {};
		if (req.method === 'GET'){
			data = req.urlObj.query
		} else {
			data = req.body;
		}
		console.log(data);
		var op = data.op,
			n1 = parseInt(data.n1),
			n2 = parseInt(data.n2);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
};