var _middlewares = [];

function exec(req, res, middlewares){
	var first = middlewares[0],
		remaining = middlewares.slice(1),
		next = function(){
			exec(req, res, remaining)
		};
	if (first)
		first(req, res, next);
}

function run(req, res){
	exec(req, res, _middlewares);
}

run.use = function(middelware){
	_middlewares.push(middlewares);
}

module.exports = run;