'use strict';

var ajax = require('./ajax');

module.exports = {
  getAllTodos: getAllTodos,
  createTodo: createTodo,
  deleteTodo: deleteTodo,
  updateTodo: updateTodo
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

function deleteTodo(todo) {
  var url = '/todos/' + todo._id;
  var data = {};
  var method = 'DELETE';

  return ajax(url, data, method);
}

function updateTodo(todo) {
  var url = '/todos/' + todo._id;
  var data = todo; 
  var method = 'PUT';

  return ajax(url, data, method);
}
