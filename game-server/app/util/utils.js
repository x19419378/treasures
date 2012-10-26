var util = require('util');

var utils = module.exports;

/**
 * 调用回调函数
 * 
 * 如果cb非空，则将之后的参数作为cb的参数调用cb
 */
utils.invokeCallback = function(cb) {
	if (!!cb && typeof cb == 'function') {
		cb.apply(null, Array.prototype.slice.call(arguments, 1));
	}
};

utils.clone = function(o) {
	var n = {};
	for (var k in o) {
		n[k] = o[k];
	}
	
	return n;
};
