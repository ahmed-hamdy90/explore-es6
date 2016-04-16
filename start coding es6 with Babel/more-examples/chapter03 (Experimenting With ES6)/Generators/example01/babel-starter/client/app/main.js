'use strict';

/**
 * To use new Ecmascript6 feature (Generators) with web Browser,
 * Must require babel-polyfill at entry point of your compiled code for web browser using babel 
 * {@link http://babeljs.io/docs/usage/polyfill/#usage-in-browser}
 */
import "babel-polyfill";

// import our local portable module
var iso       = require('../../portable');
var fibonacci = iso.fibonacci; 

console.log('Client side code started');

// print only value in returned Object from Generator.prototype.next method
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
// reset fibonacci sequence by passing true in next method 
console.log(fibonacci.next(true).value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);