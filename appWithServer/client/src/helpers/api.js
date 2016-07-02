'use strict';

var ajax = require('./ajax');

module.exports = {
  getAllTodos: getAllTodos
};

function getAllTodos () {
  var url = '/todos';
  var data = {};
  var method = 'GET';

  return ajax(url, data, method);
}
