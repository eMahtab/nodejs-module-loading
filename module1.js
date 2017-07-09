console.log("Module M1 ");


module.exports = {
	sum : function(a,b){
		return a+b;
	}
}

exports = module.exports;

exports.multiply = function(a,b){
	return a*b;
}




//console.log(module.exports);
//console.log(exports);


console.log(module.exports === exports)
