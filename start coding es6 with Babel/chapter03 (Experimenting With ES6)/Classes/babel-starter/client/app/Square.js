'use strict';

// import Polygon class first
var Polygon = require('./Polygon');

/**
 * Square Class Which Inherit from Polygon class
 * use new ES6 feature extends Keyword
 * (new Syntactical suger for Inheritance as like C-language)
 */
class Square extends Polygon {

	/**
	 * Square Constructor
	 * @param {integer} [length=10] square length (use ES6 feature default value)
	 */
	constructor(length=10) {
		// use ES6 feature super Keyword to Parent class
		super(length, length);
		this.name = 'Square'; 
	}

	get area() {
		return this.length * this.length;
	}
}

module.exports = Square;