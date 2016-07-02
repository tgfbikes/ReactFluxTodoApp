'use strict';

var ajax = require('./ajax');

module.exports = {
  getAllTodos: getAllTodos,
  createTodo: createTodo
};

function getAllTodos () {
  var url = '/todos';
  var data = {};
  var method = 'GET';

  return ajax(url, data, method);
}

function createTodo (todo) {
  var url = '/todos';
  var data = todo;

  return ajax(url, data);
}
