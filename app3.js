var a1=require('./module3.js')();

a1.alpha += 1;

console.log("Alpha "+a1.alpha);

var a2=require('./module3.js')();

console.log("Alpha "+a2.alpha)