/*Create a calculator object exhibiting the following methods
	- add(x,y)
	- subtract(x,y)
	- multiply(x,y)
	- divide(x,y)

Print the results of all the methods for x = 100, y = 50
*/

var calculator = {
	add : function(x,y){
		return x  + y;
	},
	subtract : function(x,y){
		return x  - y;
	},
	multiply : function(x,y){
		return x  * y;
	},
	divide : function(x,y){
		return x  / y;
	}
};

var x = 100, y = 50;
console.log(calculator.add(x,y));
console.log(calculator.subtract(x,y));
console.log(calculator.multiply(x,y));
console.log(calculator.divide(x,y));
