function f1(){
	console.log('f1 is triggered');
	console.log('f1 is completed');
}

function f2(){
	console.log('f2 is triggered');
	console.log('f2 is completed');
}

function f3(){
	console.log('f3 is triggered');
	console.log('f3 is completed');
}

function f4(){
	console.log('f4 is triggered');
	console.log('f4 is completed');
}

var syncFns = [f1, f2, f3, f4];

module.exports.runSync = function(){
	for(var i=0; i<syncFns.length; i++)
		syncFns[i]();	
};

function f1Async(next){
	console.log("f1Async is triggered");
	setTimeout(function(){
		console.log("f1Async is completed");
		if (next) next();
	},3000);
}

function f2Async(next){
	console.log("f2Async is triggered");
	setTimeout(function(){
		console.log("f2Async is completed");
		if (next) next()
	},3000);
}

function f3Async(next){
	console.log("f3Async is triggered");
	setTimeout(function(){
		console.log("f3Async is completed");
		if (next) next();
	},3000);
}

function f4Async(next){
	console.log("f4Async is triggered");
	setTimeout(function(){
		console.log("f4Async is completed");
		if (next) next()
	},3000);
}

var asyncFns = [f1Async, f2Async, f3Async, f4Async];

module.exports.runAsync = function(){
	function exec(fns){
		var first = fns[0],
			remaining = fns.slice(1),
			next = function(){
				exec(remaining);
			};
		if (first) first(next);
	}
	exec(asyncFns);
};

