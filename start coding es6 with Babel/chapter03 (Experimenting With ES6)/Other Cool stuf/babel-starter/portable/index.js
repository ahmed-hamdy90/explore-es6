'use strict';

module.exports = {
	validateId,
	// make this as create a function will exited
	// and return a Generator Object
	fibonacci: fibonacci()
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
	/**
	 * first fibonacci number
	 * @type {Number}
	 */
	var fn1 = 1;

	/**
	 * second fibonacci number
	 * @type {Number}
	 */
	var fn2 = 1;
    // infinite loop
	while (true) {
		var current = fn2;
		fn2 = fn1;
		fn1 += current;
		// yield return the same value which passed with next() method
		// So we will use return value to reset fibonacci sequence 
		var reset = yield current;
		if (reset) {
			fn1 = 1;
			fn2 = 1;
		}
	}	
}
