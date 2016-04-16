'use strict';

/**
 * To use new Ecmascript6 feature (Generators) with web Browser,
 * Must require babel-polyfill at entry point of your compiled code for web browser using babel 
 * {@link http://babeljs.io/docs/usage/polyfill/#usage-in-browser}
 */
import "babel-polyfill";

// import our local portable module
var iso             = require('../../portable');
var generatorObject = iso.secondGeneratorFunction(10); 

console.log('Client side code started');

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());