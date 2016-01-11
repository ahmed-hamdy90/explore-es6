"use strict";

// use import keyword to import two functions from Utility module
// into utility.js file
import { generateRandom, sum } from 'utility';

console.log(generateRandom()); // logs a random number
console.log(sum(1, 2)); // logs number generated from sum 1 and 2
