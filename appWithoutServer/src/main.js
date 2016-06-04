'use strict';

//bootstrap expects jquery to be in the global namespace
var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/HomePage');

// The div with the id 'app' is the mounting point of the application
ReactDOM.render(<Home />, document.getElementById('app'));
