var m1 = require('module1');
console.log(m1);
console.log(m1.sum(12,13));
console.log(m1.multiply(12,10));
//console.log(m1.alpha);
/* 
   var m1 = require('module1.js');

   Will not work since module1 is neither a Node.js core module nor available as node_module

*/   

//var m1 = require('./module1');

//var m1 = require('/home/mahtab/my-projects/nodejs-module-loading/module1.js');

