(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import Utils Module

var utils = require('./utils');
// import our local portable module
var iso = require('../../portable');

console.log('Client side code started');
// use portable module to validate Id value
console.log(iso.validateId('43t4gw2f'));

utils.count();

},{"../../portable":3,"./utils":2}],2:[function(require,module,exports){
'use strict';

// Export Utils Module using module.exports

module.exports = {
  count
};

/**
 * Counter function
 * used to count and print counter
 */
function count() {
  var count = 0;
  // print conter using arrow function (new feature from ES6)
  setInterval(() => console.log(count++), 400);
}

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  validateId
};

// use new ES6 const keyword to declare Constant variables
const ID_PREFIX = 'USER_';

/**
 * validate Id value that it's type is string
 * and begin with ID_PREFIX constant value
 * @param  {*} id  id value
 * @return {boolean} result of id validation 
 */
function validateId(id) {
  return typeof id === 'string' && id.indexOf(ID_PREFIX) === 0;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL21haW4uanMiLCJjbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIiwicG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUdBLElBQUksUUFBUSxRQUFRLFNBQVIsQ0FBUjs7QUFFSixJQUFJLE1BQVEsUUFBUSxnQkFBUixDQUFSOztBQUVKLFFBQVEsR0FBUixDQUFZLDBCQUFaOztBQUVBLFFBQVEsR0FBUixDQUFZLElBQUksVUFBSixDQUFlLFVBQWYsQ0FBWjs7QUFFQSxNQUFNLEtBQU47OztBQ1hBOzs7O0FBR0EsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsT0FEZTtDQUFqQjs7Ozs7O0FBUUEsU0FBUyxLQUFULEdBQWlCO0FBQ2YsTUFBSSxRQUFRLENBQVI7O0FBRFcsYUFHZixDQUFZLE1BQU0sUUFBUSxHQUFSLENBQVksT0FBWixDQUFOLEVBQTRCLEdBQXhDLEVBSGU7Q0FBakI7OztBQ1hBOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNoQixZQURnQjtDQUFqQjs7O0FBS0EsTUFBTSxZQUFZLE9BQVo7Ozs7Ozs7O0FBUU4sU0FBUyxVQUFULENBQW9CLEVBQXBCLEVBQXdCO0FBQ3ZCLFNBQU8sT0FBTyxFQUFQLEtBQWMsUUFBZCxJQUEwQixHQUFHLE9BQUgsQ0FBVyxTQUFYLE1BQTBCLENBQTFCLENBRFY7Q0FBeEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBpbXBvcnQgVXRpbHMgTW9kdWxlXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4vLyBpbXBvcnQgb3VyIGxvY2FsIHBvcnRhYmxlIG1vZHVsZSBcbnZhciBpc28gICA9IHJlcXVpcmUoJy4uLy4uL3BvcnRhYmxlJyk7XG5cbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBjb2RlIHN0YXJ0ZWQnKTtcbi8vIHVzZSBwb3J0YWJsZSBtb2R1bGUgdG8gdmFsaWRhdGUgSWQgdmFsdWUgXG5jb25zb2xlLmxvZyhpc28udmFsaWRhdGVJZCgnNDN0NGd3MmYnKSk7XG5cbnV0aWxzLmNvdW50KCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIEV4cG9ydCBVdGlscyBNb2R1bGUgdXNpbmcgbW9kdWxlLmV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb3VudFxufTtcblxuLyoqXG4gKiBDb3VudGVyIGZ1bmN0aW9uXG4gKiB1c2VkIHRvIGNvdW50IGFuZCBwcmludCBjb3VudGVyXG4gKi9cbmZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgY291bnQgPSAwO1xuICAvLyBwcmludCBjb250ZXIgdXNpbmcgYXJyb3cgZnVuY3Rpb24gKG5ldyBmZWF0dXJlIGZyb20gRVM2KVxuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHZhbGlkYXRlSWRcbn07XG5cbi8vIHVzZSBuZXcgRVM2IGNvbnN0IGtleXdvcmQgdG8gZGVjbGFyZSBDb25zdGFudCB2YXJpYWJsZXNcbmNvbnN0IElEX1BSRUZJWCA9ICdVU0VSXyc7XG5cbi8qKlxuICogdmFsaWRhdGUgSWQgdmFsdWUgdGhhdCBpdCdzIHR5cGUgaXMgc3RyaW5nXG4gKiBhbmQgYmVnaW4gd2l0aCBJRF9QUkVGSVggY29uc3RhbnQgdmFsdWVcbiAqIEBwYXJhbSAgeyp9IGlkICBpZCB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gcmVzdWx0IG9mIGlkIHZhbGlkYXRpb24gXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSWQoaWQpIHtcblx0cmV0dXJuIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgJiYgaWQuaW5kZXhPZihJRF9QUkVGSVgpID09PSAwO1xufSAiXX0=
