'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/App.jsx');
var HomePage = require('./components/HomePage.jsx');
var TodoPage = require('./components/todos/TodoPage.jsx');
var AboutPage = require('./components/about/AboutPage.jsx');
var ManageTodoPage = require('./components/todos/ManageTodoPage.jsx');
var UserSignIn = require('./components/UserSignIn.jsx');
var NotFoundPage = require('./components/404NotFound.jsx');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/todo-page" component={TodoPage} />
    <Route path="/about-page" component={AboutPage} />
    <Route path="/manage-todo" component={ManageTodoPage} />
    <Route path="/manage-todo/:id" component={ManageTodoPage} />
    <Route path="/user-signin" component={UserSignIn} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

module.exports = routes;
