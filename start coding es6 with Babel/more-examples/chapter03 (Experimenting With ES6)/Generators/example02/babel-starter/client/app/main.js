'use strict';

/**
 * To use new Ecmascript6 feature (Generators) with web Browser,
 * Must require babel-polyfill at entry point of your compiled code for web browser using babel 
 * {@link http://babeljs.io/docs/usage/polyfill/#usage-in-browser}
 */
import "babel-polyfill";
// import Utils Module
var utils = require('./utils');
// import our local portable module
var iso       = require('../../portable');
var fibonacci = iso.fibonacci; 

console.log('Client side code started');

console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
// reset fibonacci sequence by passing true in next method 
console.log(fibonacci.next(true));
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
// use return method into Generator function which return given value and finish th generator
// @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return} 
console.log(fibonacci.return('end'));
console.log(fibonacci.next());