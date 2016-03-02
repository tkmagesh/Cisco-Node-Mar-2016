console.log('loading accumulator');
var result = 0;
module.exports = {
	add : function(x){
		result += x;
	},
	subtract : function(x){
		result -= x;
	},
	multiply : function(x){
		result *= x;
	},
	divide : function(x){
		result /= x;
	},
	getResult : function(){
		return result;
	}
}; 