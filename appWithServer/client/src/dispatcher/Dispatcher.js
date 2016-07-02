'use strict';

// There is only one, hence the invocation on the new Dispatcher function.  Singleton pattern.
var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();