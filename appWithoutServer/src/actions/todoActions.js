'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var todoApi = require('../mockApi/todoApi');
var ActionTypes = require('../constants/actionTypes');

var TodoActions = {
  // the actual action creator
  createTodo: function (todo) {
    var newTodo = todoApi.saveTodo(todo); // Will be AJAX call in real life
    
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_TODO,  // This payload is the actual action
      todo: newTodo
    });
  }
};

module.exports = TodoActions;