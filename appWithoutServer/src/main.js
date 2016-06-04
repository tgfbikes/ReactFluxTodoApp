'use strict';

//bootstrap expects jquery to be in the global namespace
var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./routes');
var hashHistory = require('react-router').hashHistory;

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>
, document.getElementById('app')
);
