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

// this will throws an error As con not redeclare constant veriable(i.e: reSet value of a constant)
// @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const} for more description about const keyword
// MAX_HEIGHT = 250;

// also will throws an error
// var MAX_HEIGHT = 30;

if (isInRange(300)) {
  // only in case block scope will not throws an error
  // As this will declare a new block scoped MAX_HEIGHT veriable
  const MAX_HEIGHT = 800; // same as let MAX_HEIGHT = 800;

  console.log('MAX_HEIGHT value is: ', MAX_HEIGHT);
  // 500 not in range as MAX_HEIGHT still 450
  console.log('is 500 in range', isInRange(500));
}
