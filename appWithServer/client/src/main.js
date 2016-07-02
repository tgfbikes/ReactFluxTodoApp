'use strict';

//bootstrap expects jquery to be in the global namespace
var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./routes');
// var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var InitializeActionCreator = require('./actions/initializeActionCreator');

InitializeActionCreator.initializeApp();

// Need server to be set up to use
// var browserHistory = require('react-router').browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>
, document.getElementById('app')
);
