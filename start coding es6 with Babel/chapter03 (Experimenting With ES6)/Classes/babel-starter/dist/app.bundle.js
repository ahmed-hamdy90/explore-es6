(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import Utils Module

var utils = require('./utils');
// import our local portable module
var iso = require('../../portable');

console.log('Client side code started');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL21haW4uanMiLCJjbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIiwicG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUdBLElBQUksUUFBUSxRQUFRLFNBQVIsQ0FBUjs7QUFFSixJQUFJLE1BQVEsUUFBUSxnQkFBUixDQUFSOztBQUVKLFFBQVEsR0FBUixDQUFZLDBCQUFaOzs7QUNQQTs7OztBQUdBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLE9BRGU7Q0FBakI7Ozs7OztBQVFBLFNBQVMsS0FBVCxHQUFpQjtBQUNmLE1BQUksUUFBUSxDQUFSOztBQURXLGFBR2YsQ0FBWSxNQUFNLFFBQVEsR0FBUixDQUFZLE9BQVosQ0FBTixFQUE0QixHQUF4QyxFQUhlO0NBQWpCOzs7QUNYQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7QUFDaEIsWUFEZ0I7Q0FBakI7OztBQUtBLE1BQU0sWUFBWSxPQUFaOzs7Ozs7OztBQVFOLFNBQVMsVUFBVCxDQUFvQixFQUFwQixFQUF3QjtBQUN2QixTQUFPLE9BQU8sRUFBUCxLQUFjLFFBQWQsSUFBMEIsR0FBRyxPQUFILENBQVcsU0FBWCxNQUEwQixDQUExQixDQURWO0NBQXhCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IFV0aWxzIE1vZHVsZVxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuLy8gaW1wb3J0IG91ciBsb2NhbCBwb3J0YWJsZSBtb2R1bGUgXG52YXIgaXNvICAgPSByZXF1aXJlKCcuLi8uLi9wb3J0YWJsZScpO1xuXG5jb25zb2xlLmxvZygnQ2xpZW50IHNpZGUgY29kZSBzdGFydGVkJyk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gRXhwb3J0IFV0aWxzIE1vZHVsZSB1c2luZyBtb2R1bGUuZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvdW50XG59O1xuXG4vKipcbiAqIENvdW50ZXIgZnVuY3Rpb25cbiAqIHVzZWQgdG8gY291bnQgYW5kIHByaW50IGNvdW50ZXJcbiAqL1xuZnVuY3Rpb24gY291bnQoKSB7XG4gIHZhciBjb3VudCA9IDA7XG4gIC8vIHByaW50IGNvbnRlciB1c2luZyBhcnJvdyBmdW5jdGlvbiAobmV3IGZlYXR1cmUgZnJvbSBFUzYpXG4gIHNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKGNvdW50KyspLCA0MDApO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmFsaWRhdGVJZFxufTtcblxuLy8gdXNlIG5ldyBFUzYgY29uc3Qga2V5d29yZCB0byBkZWNsYXJlIENvbnN0YW50IHZhcmlhYmxlc1xuY29uc3QgSURfUFJFRklYID0gJ1VTRVJfJztcblxuLyoqXG4gKiB2YWxpZGF0ZSBJZCB2YWx1ZSB0aGF0IGl0J3MgdHlwZSBpcyBzdHJpbmdcbiAqIGFuZCBiZWdpbiB3aXRoIElEX1BSRUZJWCBjb25zdGFudCB2YWx1ZVxuICogQHBhcmFtICB7Kn0gaWQgIGlkIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSByZXN1bHQgb2YgaWQgdmFsaWRhdGlvbiBcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJZChpZCkge1xuXHRyZXR1cm4gdHlwZW9mIGlkID09PSAnc3RyaW5nJyAmJiBpZC5pbmRleE9mKElEX1BSRUZJWCkgPT09IDA7XG59ICJdfQ==
