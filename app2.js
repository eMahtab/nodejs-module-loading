var x = require('./module2.js');
console.log("Alpha "+x.alpha)

x.alpha += 1;

var y = require('./module2.js');
console.log("Alpha "+y.alpha)



