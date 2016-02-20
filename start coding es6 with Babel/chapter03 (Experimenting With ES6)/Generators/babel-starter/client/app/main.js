'use strict';

// As we use new ES6 feature (Generator)
// So we Must require babel-polyfill at entry point to our node application 
require("babel-polyfill");
// import Utils Module
var utils = require('./utils');
// import our local portable module
var iso       = require('../../portable');
var fibonacci = iso.fibonacci; 

console.log('Client side code started');

console.log(fibonacci.next());