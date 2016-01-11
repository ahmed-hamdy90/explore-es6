"use strict";

// use import keyword to import utility module from utility.js file
import utils from 'utility';

console.log(utils.generateRandom()); // logs a random number
console.log(utils.sum(1, 2)); // logs number generated from sum 1 and 2

// also we can reExport the imported utility module agian
export default utils;
