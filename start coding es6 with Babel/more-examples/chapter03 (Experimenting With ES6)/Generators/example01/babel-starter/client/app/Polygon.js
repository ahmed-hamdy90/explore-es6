'use strict';

/**
 * Polygon class
 * use new ES6 feature class keyword 
 * (new Syntactical suger for Inheritance as like C-language)
 */
class Polygon {

	/**
	 * Polygon Constructor
	 * @param {integer} width  width of Polygon shape
	 * @param {integer} height height of Polygon shape
	 */
	constructor(width, height) {
		this.name   = 'Polygon';
		this.width  = width;
		this.height = height;
	}

    /**
     * Say Name of This Class
     */
	sayName() {
		console.log('Hi, my name is ' + this.name);
	}
}

module.exports = Polygon;