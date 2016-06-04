'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/App');
var HomePage = require('./components/HomePage');
var TodoPage = require('./components/todos/TodoPage');
var AboutPage = require('./components/about/AboutPage');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/todos" component={TodoPage} />
    <Route path="/about" component={AboutPage} />
  </Route>
);

module.exports = routes;