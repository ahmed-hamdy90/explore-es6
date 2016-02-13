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

},{}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL21haW4uanMiLCJjbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIiwicG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUdBLElBQUksUUFBUSxRQUFRLFNBQVIsQ0FBUjs7QUFFSixJQUFJLE1BQVEsUUFBUSxnQkFBUixDQUFSOztBQUVKLFFBQVEsR0FBUixDQUFZLDBCQUFaOztBQUVBLFFBQVEsR0FBUixDQUFZLElBQUksVUFBSixDQUFlLFVBQWYsQ0FBWjs7QUFFQSxNQUFNLEtBQU47OztBQ1hBOzs7O0FBR0EsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsY0FEZTtDQUFqQjs7Ozs7O0FBUUEsU0FBUyxLQUFULEdBQWlCO0FBQ2YsTUFBSSxRQUFRLENBQVI7O0FBRFcsYUFHZixDQUFZO1dBQU0sUUFBUSxHQUFSLENBQVksT0FBWjtHQUFOLEVBQTRCLEdBQXhDLEVBSGU7Q0FBakI7OztBQ1hBOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNoQix3QkFEZ0I7Q0FBakI7OztBQUtBLElBQU0sWUFBWSxPQUFaOzs7Ozs7OztBQVFOLFNBQVMsVUFBVCxDQUFvQixFQUFwQixFQUF3QjtBQUN2QixTQUFPLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxPQUFILENBQVcsU0FBWCxNQUEwQixDQUExQixDQURWO0NBQXhCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IFV0aWxzIE1vZHVsZVxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuLy8gaW1wb3J0IG91ciBsb2NhbCBwb3J0YWJsZSBtb2R1bGUgXG52YXIgaXNvICAgPSByZXF1aXJlKCcuLi8uLi9wb3J0YWJsZScpO1xuXG5jb25zb2xlLmxvZygnQ2xpZW50IHNpZGUgY29kZSBzdGFydGVkJyk7XG4vLyB1c2UgcG9ydGFibGUgbW9kdWxlIHRvIHZhbGlkYXRlIElkIHZhbHVlIFxuY29uc29sZS5sb2coaXNvLnZhbGlkYXRlSWQoJzQzdDRndzJmJykpO1xuXG51dGlscy5jb3VudCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBFeHBvcnQgVXRpbHMgTW9kdWxlIHVzaW5nIG1vZHVsZS5leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY291bnRcbn07XG5cbi8qKlxuICogQ291bnRlciBmdW5jdGlvblxuICogdXNlZCB0byBjb3VudCBhbmQgcHJpbnQgY291bnRlclxuICovXG5mdW5jdGlvbiBjb3VudCgpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgLy8gcHJpbnQgY29udGVyIHVzaW5nIGFycm93IGZ1bmN0aW9uIChuZXcgZmVhdHVyZSBmcm9tIEVTNilcbiAgc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coY291bnQrKyksIDQwMCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR2YWxpZGF0ZUlkXG59O1xuXG4vLyB1c2UgbmV3IEVTNiBjb25zdCBrZXl3b3JkIHRvIGRlY2xhcmUgQ29uc3RhbnQgdmFyaWFibGVzXG5jb25zdCBJRF9QUkVGSVggPSAnVVNFUl8nO1xuXG4vKipcbiAqIHZhbGlkYXRlIElkIHZhbHVlIHRoYXQgaXQncyB0eXBlIGlzIHN0cmluZ1xuICogYW5kIGJlZ2luIHdpdGggSURfUFJFRklYIGNvbnN0YW50IHZhbHVlXG4gKiBAcGFyYW0gIHsqfSBpZCAgaWQgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHJlc3VsdCBvZiBpZCB2YWxpZGF0aW9uIFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUlkKGlkKSB7XG5cdHJldHVybiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnICYmIGlkLmluZGV4T2YoSURfUFJFRklYKSA9PT0gMDtcbn0gIl19
