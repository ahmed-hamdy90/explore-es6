'use strict';

module.exports = {
	validateId
};

// use new ES6 const keyword to declare Constant variables
const ID_PREFIX = 'USER_';

/**
 * validate Id value that it's type is string
 * and begin with ID_PREFIX constant value
 * @param  {*} id  id value
 * @return {boolean} result of id validation
 */
function validateId(id) {
	return typeof id === 'string' && id.indexOf(ID_PREFIX) === 0;
}

/**
 * fibonacci method is a Generator function to apply Fibonacci Sequence
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*} for function* declaration
 * @see {@link https://en.wikipedia.org/wiki/Fibonacci_number} for define Fibonacci Squance
 * @return {Generator} Generator Object
 */
function* fibonacci() {
	var n1 = 0;
	var n2 = 1;	
}
