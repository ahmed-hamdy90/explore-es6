"use strict";

// create Utility module as es6 module

/**
 * Generate Random Number
 * @return {Number} random number
 */
var generateRandom = function () {
	return Math.random();
}

/**
 * add two Numbers
 * @param  {Number} a first number
 * @param  {Number} b second number
 * @return {Number} sum of a and b numbers
 */
var sum = function (a, b) {
	return a + b;
}

// create one object for the entire module
var utils = {
  generateRandom: generateRandom,
  sum: sum
};

// export Utility module as one object Using [export default] keyword
export default utils;
