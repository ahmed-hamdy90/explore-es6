'use strict';

// Export Utils Module using module.exports
module.exports = {
  count
}

/**
 * Counter function
 * used to count and print counter
 */
function count() {
  var count = 0;
  // print conter using arrow function (new feature from ES6)
  setInterval(() => console.log(count++), 400);
}
