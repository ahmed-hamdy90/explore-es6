(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Polygon class
 * use new ES6 feature class keyword 
 * (new Syntactical suger for Inheritance as like C-language)
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = function () {

	/**
  * Polygon Constructor
  * @param {integer} width  width of Polygon shape
  * @param {integer} height height of Polygon shape
  */

	function Polygon(width, height) {
		_classCallCheck(this, Polygon);

		this.name = 'Polygon';
		this.width = width;
		this.height = height;
	}

	/**
  * Say Name of This Class
  */


	_createClass(Polygon, [{
		key: 'sayName',
		value: function sayName() {
			console.log('Hi, my name is ' + this.name);
		}
	}]);

	return Polygon;
}();

module.exports = Polygon;

},{}],2:[function(require,module,exports){
'use strict';

// import Polygon class first

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = require('./Polygon');

/**
 * Square Class Which Inherit from Polygon class
 * use new ES6 feature extends Keyword
 * (new Syntactical suger for Inheritance as like C-language)
 */

var Square = function (_Polygon) {
	_inherits(Square, _Polygon);

	/**
  * Square Constructor
  * @param {integer} [length=10] square length (use ES6 feature default value)
  */

	function Square() {
		var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

		_classCallCheck(this, Square);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Square).call(this, length, length));
		// use ES6 feature super Keyword to Parent class


		_this.name = 'Square';
		return _this;
	}

	/**
  * Get Square Area
  * <br/>Using get syntax for area property of Square Object
  * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get}
  * @return {integer} square area value
  */


	_createClass(Square, [{
		key: 'area',
		get: function get() {
			return this.height * this.width;
		}
	}]);

	return Square;
}(Polygon);

module.exports = Square;

},{"./Polygon":1}],3:[function(require,module,exports){
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

},{"../../portable":5,"./Square":2,"./utils":4}],4:[function(require,module,exports){
'use strict';

// Export Utils Module using module.exports

module.exports = {
  count: count
};

/**
 * Counter function
 * used to count and print counter
 */
function count() {
  var count = 0;
  // print conter using arrow function (new feature from ES6)
  setInterval(function () {
    return console.log(count++);
  }, 400);
}

},{}],5:[function(require,module,exports){
'use strict';

module.exports = {
  validateId: validateId
};

// use new ES6 const keyword to declare Constant variables
var ID_PREFIX = 'USER_';

/**
 * validate Id value that it's type is string
 * and begin with ID_PREFIX constant value
 * @param  {*} id  id value
 * @return {boolean} result of id validation 
 */
function validateId(id) {
  return typeof id === 'string' && id.indexOf(ID_PREFIX) === 0;
}

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL1BvbHlnb24uanMiLCJjbGllbnQvYXBwL1NxdWFyZS5qcyIsImNsaWVudC9hcHAvbWFpbi5qcyIsImNsaWVudC9hcHAvdXRpbHMvaW5kZXguanMiLCJwb3J0YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7SUFPTTs7Ozs7Ozs7QUFPTCxVQVBLLE9BT0wsQ0FBWSxLQUFaLEVBQW1CLE1BQW5CLEVBQTJCO3dCQVB0QixTQU9zQjs7QUFDMUIsT0FBSyxJQUFMLEdBQWMsU0FBZCxDQUQwQjtBQUUxQixPQUFLLEtBQUwsR0FBYyxLQUFkLENBRjBCO0FBRzFCLE9BQUssTUFBTCxHQUFjLE1BQWQsQ0FIMEI7RUFBM0I7Ozs7Ozs7Y0FQSzs7NEJBZ0JLO0FBQ1QsV0FBUSxHQUFSLENBQVksb0JBQW9CLEtBQUssSUFBTCxDQUFoQyxDQURTOzs7O1FBaEJMOzs7QUFxQk4sT0FBTyxPQUFQLEdBQWlCLE9BQWpCOzs7QUM1QkE7Ozs7Ozs7Ozs7OztBQUdBLElBQUksVUFBVSxRQUFRLFdBQVIsQ0FBVjs7Ozs7Ozs7SUFPRTs7Ozs7Ozs7QUFNTCxVQU5LLE1BTUwsR0FBdUI7TUFBWCwrREFBTyxrQkFBSTs7d0JBTmxCLFFBTWtCOztxRUFObEIsbUJBUUUsUUFBUTs7QUFGUTs7QUFHdEIsUUFBSyxJQUFMLEdBQVksUUFBWixDQUhzQjs7RUFBdkI7Ozs7Ozs7Ozs7Y0FOSzs7c0JBa0JPO0FBQ1gsVUFBTyxLQUFLLE1BQUwsR0FBYyxLQUFLLEtBQUwsQ0FEVjs7OztRQWxCUDtFQUFlOztBQXVCckIsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7QUNqQ0E7Ozs7QUFHQSxJQUFJLFFBQVEsUUFBUSxTQUFSLENBQVI7O0FBRUosSUFBSSxNQUFNLFFBQVEsZ0JBQVIsQ0FBTjs7QUFFSixJQUFJLFNBQVMsUUFBUSxVQUFSLENBQVQ7O0FBRUosUUFBUSxHQUFSLENBQVksMEJBQVo7O0FBRUEsSUFBSSxVQUFVLElBQUksTUFBSixDQUFXLENBQVgsQ0FBVjtBQUNKLElBQUksVUFBVSxJQUFJLE1BQUosRUFBVjs7QUFFSixRQUFRLEdBQVIsQ0FBWSxvQkFBb0IsUUFBUSxJQUFSLENBQWhDO0FBQ0EsUUFBUSxHQUFSLENBQVksb0JBQW9CLFFBQVEsSUFBUixDQUFoQztBQUNBLFFBQVEsT0FBUjs7O0FDaEJBOzs7O0FBR0EsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsY0FEZTtDQUFqQjs7Ozs7O0FBUUEsU0FBUyxLQUFULEdBQWlCO0FBQ2YsTUFBSSxRQUFRLENBQVI7O0FBRFcsYUFHZixDQUFZO1dBQU0sUUFBUSxHQUFSLENBQVksT0FBWjtHQUFOLEVBQTRCLEdBQXhDLEVBSGU7Q0FBakI7OztBQ1hBOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNoQix3QkFEZ0I7Q0FBakI7OztBQUtBLElBQU0sWUFBWSxPQUFaOzs7Ozs7OztBQVFOLFNBQVMsVUFBVCxDQUFvQixFQUFwQixFQUF3QjtBQUN2QixTQUFPLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxPQUFILENBQVcsU0FBWCxNQUEwQixDQUExQixDQURWO0NBQXhCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQb2x5Z29uIGNsYXNzXG4gKiB1c2UgbmV3IEVTNiBmZWF0dXJlIGNsYXNzIGtleXdvcmQgXG4gKiAobmV3IFN5bnRhY3RpY2FsIHN1Z2VyIGZvciBJbmhlcml0YW5jZSBhcyBsaWtlIEMtbGFuZ3VhZ2UpXG4gKi9cbmNsYXNzIFBvbHlnb24ge1xuXG5cdC8qKlxuXHQgKiBQb2x5Z29uIENvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7aW50ZWdlcn0gd2lkdGggIHdpZHRoIG9mIFBvbHlnb24gc2hhcGVcblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBoZWlnaHQgaGVpZ2h0IG9mIFBvbHlnb24gc2hhcGVcblx0ICovXG5cdGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcblx0XHR0aGlzLm5hbWUgICA9ICdQb2x5Z29uJztcblx0XHR0aGlzLndpZHRoICA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTYXkgTmFtZSBvZiBUaGlzIENsYXNzXG4gICAgICovXG5cdHNheU5hbWUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ0hpLCBteSBuYW1lIGlzICcgKyB0aGlzLm5hbWUpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9seWdvbjsiLCIndXNlIHN0cmljdCc7XG5cbi8vIGltcG9ydCBQb2x5Z29uIGNsYXNzIGZpcnN0XG52YXIgUG9seWdvbiA9IHJlcXVpcmUoJy4vUG9seWdvbicpO1xuXG4vKipcbiAqIFNxdWFyZSBDbGFzcyBXaGljaCBJbmhlcml0IGZyb20gUG9seWdvbiBjbGFzc1xuICogdXNlIG5ldyBFUzYgZmVhdHVyZSBleHRlbmRzIEtleXdvcmRcbiAqIChuZXcgU3ludGFjdGljYWwgc3VnZXIgZm9yIEluaGVyaXRhbmNlIGFzIGxpa2UgQy1sYW5ndWFnZSlcbiAqL1xuY2xhc3MgU3F1YXJlIGV4dGVuZHMgUG9seWdvbiB7XG5cblx0LyoqXG5cdCAqIFNxdWFyZSBDb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IFtsZW5ndGg9MTBdIHNxdWFyZSBsZW5ndGggKHVzZSBFUzYgZmVhdHVyZSBkZWZhdWx0IHZhbHVlKVxuXHQgKi9cblx0Y29uc3RydWN0b3IobGVuZ3RoPTEwKSB7XG5cdFx0Ly8gdXNlIEVTNiBmZWF0dXJlIHN1cGVyIEtleXdvcmQgdG8gUGFyZW50IGNsYXNzXG5cdFx0c3VwZXIobGVuZ3RoLCBsZW5ndGgpO1xuXHRcdHRoaXMubmFtZSA9ICdTcXVhcmUnO1xuXHR9XG5cbiAgLyoqXG4gICAqIEdldCBTcXVhcmUgQXJlYVxuICAgKiA8YnIvPlVzaW5nIGdldCBzeW50YXggZm9yIGFyZWEgcHJvcGVydHkgb2YgU3F1YXJlIE9iamVjdFxuICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRnVuY3Rpb25zL2dldH1cbiAgICogQHJldHVybiB7aW50ZWdlcn0gc3F1YXJlIGFyZWEgdmFsdWVcbiAgICovXG5cdGdldCBhcmVhICgpIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQgKiB0aGlzLndpZHRoO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3F1YXJlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBpbXBvcnQgVXRpbHMgTW9kdWxlXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4vLyBpbXBvcnQgb3VyIGxvY2FsIHBvcnRhYmxlIG1vZHVsZVxudmFyIGlzbyA9IHJlcXVpcmUoJy4uLy4uL3BvcnRhYmxlJyk7XG4vLyBpbXBvcnQgU3F1YXJlIENsYXNzXG52YXIgU3F1YXJlID0gcmVxdWlyZSgnLi9TcXVhcmUnKTtcblxuY29uc29sZS5sb2coJ0NsaWVudCBzaWRlIGNvZGUgc3RhcnRlZCcpO1xuXG52YXIgc3F1YXJlMSA9IG5ldyBTcXVhcmUoNSk7XG52YXIgc3F1YXJlMiA9IG5ldyBTcXVhcmUoKTtcblxuY29uc29sZS5sb2coJ1NxdWFyZSAxIGFyZWE6ICcgKyBzcXVhcmUxLmFyZWEpO1xuY29uc29sZS5sb2coJ1NxdWFyZSAyIGFyZWE6ICcgKyBzcXVhcmUyLmFyZWEpO1xuc3F1YXJlMS5zYXlOYW1lKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIEV4cG9ydCBVdGlscyBNb2R1bGUgdXNpbmcgbW9kdWxlLmV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb3VudFxufTtcblxuLyoqXG4gKiBDb3VudGVyIGZ1bmN0aW9uXG4gKiB1c2VkIHRvIGNvdW50IGFuZCBwcmludCBjb3VudGVyXG4gKi9cbmZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgY291bnQgPSAwO1xuICAvLyBwcmludCBjb250ZXIgdXNpbmcgYXJyb3cgZnVuY3Rpb24gKG5ldyBmZWF0dXJlIGZyb20gRVM2KVxuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHZhbGlkYXRlSWRcbn07XG5cbi8vIHVzZSBuZXcgRVM2IGNvbnN0IGtleXdvcmQgdG8gZGVjbGFyZSBDb25zdGFudCB2YXJpYWJsZXNcbmNvbnN0IElEX1BSRUZJWCA9ICdVU0VSXyc7XG5cbi8qKlxuICogdmFsaWRhdGUgSWQgdmFsdWUgdGhhdCBpdCdzIHR5cGUgaXMgc3RyaW5nXG4gKiBhbmQgYmVnaW4gd2l0aCBJRF9QUkVGSVggY29uc3RhbnQgdmFsdWVcbiAqIEBwYXJhbSAgeyp9IGlkICBpZCB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gcmVzdWx0IG9mIGlkIHZhbGlkYXRpb24gXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSWQoaWQpIHtcblx0cmV0dXJuIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgJiYgaWQuaW5kZXhPZihJRF9QUkVGSVgpID09PSAwO1xufSAiXX0=
