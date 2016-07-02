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

// use new ES6 const keyword to declare Constant veriables {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const}
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

// this will throws an error
// As con not redeclare the same constant veriable(i.e: reSet value of a constant)
// {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const#Description}
// MAX_HEIGHT = 250;

console.log('is 300 in range', isInRange(300));
console.log('is 100 in range', isInRange(100));

// use new ES6 let keyword to declare a block scope local variable {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let}
for(let i = 0; i < 10; i++) {
  console.log('inside', i);
}
// will throws error -> ReferenceError: i is not defined
// As i is block local veriable into for-loop block
//console.log('outside', i);

// use new ES6 feature: Destructuring assignment syntax {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment}
// which used to extract data from array or object into veriables
/**
 * extract person detial from given person obejct then print this detials
 *
 * @param  {object} person Object contains person details
 */
function doStuff(person) {
  // Old way to extract data(name, age and job) of person from object
  // var name = person.name;
  // var age  = person.age;
  // var job  = person.job;
  // Now extract data of person using Object destructuring syntax {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring}
  var {name, age, job} = person;
  console.log(name + '(' + age + ') works as a ' + job);
}

doStuff({
  name: 'Jason',
  job : 'Developer',
  age : 31
});

/*
// in case there a callback function of a Request call
// take response array as parameter
function callback(response) {
  // we can use Array destructuring to get data(status and body) from array {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring}
  var [status, body] = response;
  ... etc
}
*/
