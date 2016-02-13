'use strict';

// import Utils Module
var utils = require('./utils');
// import our local portable module
var iso = require('../../portable');
// import Square Class
var Square = require('./Square');

console.log('Client side code started');

var square1 = new Square(5);
var square2 = new Square();

console.log('Square 1 area: ' + square1.area);
console.log('Square 2 area: ' + square2.area);
square1.sayName();
