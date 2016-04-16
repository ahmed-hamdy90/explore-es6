'use strict';

module.exports = {
	// make this as create a function will exited
	// and return a Generator Object
	fibonacci: fibonacci()
};

/**
 * fibonacci method is a Generator function to apply Fibonacci Sequence
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*} for function* declaration
 * @see {@link https://en.wikipedia.org/wiki/Fibonacci_number} for define Fibonacci Squance 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Advanced_generators} for define Fibonacci Squance
 * @return {Generator} Generator Object
 */
function* fibonacci() {
	/**
	 * first fibonacci number
	 * @type {Number}
	 */
	var fn1 = 0;

	/**
	 * second fibonacci number
	 * @type {Number}
	 */
	var fn2 = 1;
    // infinite loop
	while (true) {
		var current = fn1;
		fn1 = fn2;
		fn2 = current + fn1;
		// yield return the same value which passed with next() method
		// So we will use return value to reset fibonacci sequence 
		var reset = yield current;
		if (reset) {
			fn1 = 0;
			fn2 = 1;
		}
	}	
}
