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

  /**
   * Get Square Area
   * <br/>Using get syntax for area property of Square Object
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get}
   * @return {integer} square area value
   */
	get area () {
		return this.height * this.width;
	}
}

module.exports = Square;
