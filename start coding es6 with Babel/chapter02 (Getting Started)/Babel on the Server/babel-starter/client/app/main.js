'use strict';

// import Utils Module
var utils = require('./utils');
// import our local portable module 
var iso   = require('../../portable');

console.log('Client side code started');
// use portable module to validate Id value 
console.log(iso.validateId('43t4gw2f'));

utils.count();
