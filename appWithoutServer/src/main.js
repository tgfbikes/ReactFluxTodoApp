'use strict';

//bootstrap expects jquery to be in the global namespace
var jQuery, $;
$ = jQuery = require('jquery');

// Using commonjs pattern
var App = console.log('hello from browserify');

module.exports = App;