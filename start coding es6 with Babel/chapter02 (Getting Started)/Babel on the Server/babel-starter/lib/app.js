'use strict';

var express = require('express');
// create express app
var app     = express();
// create server using express app
var server  = require('http').createServer(app);
// import our local portable module 
var iso     = require('../portable');

// use portable module to validate Id value 
console.log(iso.validateId('USER_12345'));

// make root Route for app to read index.html file under dist Folder
app
  .use('/', express.static(__dirname + '/../dist', { maxAge: 1000000 }));

// make server listen on 9000 port
server
  .listen(9000, () => console.log('App Strated'));
