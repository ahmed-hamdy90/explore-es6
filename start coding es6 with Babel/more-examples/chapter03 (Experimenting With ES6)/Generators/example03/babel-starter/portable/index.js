'use strict';

module.exports = {
	secondGeneratorFunction: generator2
};

/**
 * first Generator function
 * 
 * @param {Number} num an integer Number 
 * @return {Generator} Generator Object
 */
function* generator1(num) {
	yield num * 3;
	yield num * 4;
}

/**
 * second Generator function 
 *
 * @param {Number} num an integer Number 
 * @return {Generator} Generator Object
 */
function* generator2(num) {
	// begin iterator loop with given number using yeild experssion
	yield num;
	yield num * 2;

	/**
	 * use yield* experssion to delegate to another Generator method
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*}
	 */
	yield* generator1(num);

	/**
	 * use yield* experssion to delegate to iterable object (Array)
	 * * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*}
	 */
	yield* [1, 2];
}
