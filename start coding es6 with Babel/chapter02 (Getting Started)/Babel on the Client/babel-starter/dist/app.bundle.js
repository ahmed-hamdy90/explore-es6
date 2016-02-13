(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import Utils Module

var utils = require('./utils');

console.log('Client side code started');

utils.count();

},{"./utils":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL21haW4uanMiLCJjbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7QUFHQSxJQUFJLFFBQVEsUUFBUSxTQUFSLENBQVI7O0FBRUosUUFBUSxHQUFSLENBQVksMEJBQVo7O0FBRUEsTUFBTSxLQUFOOzs7QUNQQTs7OztBQUdBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLGNBRGU7Q0FBakI7Ozs7OztBQVFBLFNBQVMsS0FBVCxHQUFpQjtBQUNmLE1BQUksUUFBUSxDQUFSOztBQURXLGFBR2YsQ0FBWTtXQUFNLFFBQVEsR0FBUixDQUFZLE9BQVo7R0FBTixFQUE0QixHQUF4QyxFQUhlO0NBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IFV0aWxzIE1vZHVsZVxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5jb25zb2xlLmxvZygnQ2xpZW50IHNpZGUgY29kZSBzdGFydGVkJyk7XG5cbnV0aWxzLmNvdW50KCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIEV4cG9ydCBVdGlscyBNb2R1bGUgdXNpbmcgbW9kdWxlLmV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb3VudFxufTtcblxuLyoqXG4gKiBDb3VudGVyIGZ1bmN0aW9uXG4gKiB1c2VkIHRvIGNvdW50IGFuZCBwcmludCBjb3VudGVyXG4gKi9cbmZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgY291bnQgPSAwO1xuICAvLyBwcmludCBjb250ZXIgdXNpbmcgYXJyb3cgZnVuY3Rpb24gKG5ldyBmZWF0dXJlIGZyb20gRVM2KVxuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn1cbiJdfQ==
