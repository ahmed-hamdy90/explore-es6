'use strict';

/**
 * require  babel register hook to enable Us to use ES6 new featues with node
 * @see {@link https://babeljs.io/docs/usage/require/}
 **/
require('babel-register')({
  presets: [ 'es2015' ]
});

// then require our app.js file
require('./lib/app');
