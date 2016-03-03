module.exports = function(req, res, next){
	console.log('resource not found - writing 404');
	res.writeHead(404);
	res.end();
	next();
}