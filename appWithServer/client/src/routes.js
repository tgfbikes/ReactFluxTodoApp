'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/App');
var HomePage = require('./components/HomePage');
var TodoPage = require('./components/todos/TodoPage');
var AboutPage = require('./components/about/AboutPage');
var ManageTodoPage = require('./components/todos/ManageTodoPage');
var NotFoundPage = require('./components/404NotFound');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/todo-page" component={TodoPage} />
    <Route path="/about-page" component={AboutPage} />
    <Route path="/manage-todo" component={ManageTodoPage} />
    <Route path="/manage-todo/:id" component={ManageTodoPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

module.exports = routes;