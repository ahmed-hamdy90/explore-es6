'use strict';

/**
 * To use new Ecmascript6 feature (Generators) with Node app,
 * Must require babel-polyfill at entry point into node app.
 * {@link http://babeljs.io/docs/usage/polyfill/#usage-in-node-browserify-webpack}
 */
require("babel-polyfill");

var express = require('express');
// create express app
var app     = express();
// create server using express app
var server  = require('http').createServer(app);

// make root Route for app to read index.html file under dist Folder
app
  .use('/', express.static(__dirname + '/../dist', { maxAge: 1000000 }));

// make server listen on 9000 port
server
  .listen(9000, () => console.log('App Strated'));
