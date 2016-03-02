var acc = require('./accumulator');

acc.add(100);
acc.subtract(50);
acc.multiply(10);
acc.divide(2);

console.log('acc.getResult() -> ', acc.getResult()) // => 250

var acc2 = require('./accumulator');
console.log('acc2.getResult() -> ', acc2.getResult()); // => 0