"use strict";
"use strict";

// create Utility module as es6 module
/**
 * Generate Random Number
 * @return {Number} random number
 */
function generateRandom() {
	return Math.random();
}

/**
 * add two Numbers
 * @param  {Number} a first number
 * @param  {Number} b second number
 * @return {Number} sum of a and b numbers
 */
function sum(a, b) {
	return a + b;
}

exports.random = generateRandom, exports.doSum = sum;

//# sourceMappingURL=utility.js.map