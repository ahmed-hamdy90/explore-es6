'use strict';

/**
 * To use new Ecmascript6 feature (Generators) with web Browser,
 * Must require babel-polyfill at entry point of your compiled code for web browser using babel
 * {@link http://babeljs.io/docs/usage/polyfill/#usage-in-browser}
 */
import "babel-polyfill";

console.log('Client side code started');

// use new ES6 const keyword to declare Constant veriables
/**
 * MAX_HEIGHT Constant
 * @constant
 * @type {Number}
 */
const MAX_HEIGHT = 450;

/**
 * MIN_HEIGHT Constant
 * @constant
 * @type {Number}
 */
const MIN_HEIGHT = 200;

/**
 * Check If Given Number is between The Range or not
 * @param  {Number}  n given number used to check with
 * @return {Boolean}
 */
function isInRange(n) {
  return n <= MAX_HEIGHT && n >= MIN_HEIGHT;
}

console.log('is 300 in range', isInRange(300));
console.log('is 100 in range', isInRange(100));

// use new ES6 let keyword to declare a block scope local variable
for(let i = 0; i < 10; i++) {
  console.log('inside', i);
}
// will throws error -> ReferenceError: i is not defined
// As i is block local veriable into for-loop block
//console.log('outside', i);

/**
 * redeclaring the same variable
 * using let keyword in the same block scope
 * will throws SyntaxError
 * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let}
 */
if (true) {
  let x;
  let x; // will throws SyntaxError
}
