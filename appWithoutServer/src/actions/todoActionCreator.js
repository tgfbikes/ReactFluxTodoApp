'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var todoApi = require('../mockApi/todoApi');
var ActionTypes = require('../constants/actionTypes');

var TodoActionCreator = {
  // the actual action creator
  createTodo: function (todo) {
    var newTodo = todoApi.saveTodo(todo); // Will be AJAX call in real life
    
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_TODO,  // This payload is the actual action
      todo: newTodo
    });
  },

  updateTodo: function (todo) {
    var updatedTodo = todoApi.saveTodo(todo); 

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_TODO,  
      todo: updatedTodo
    });
  },

  deleteTodo: function (todoId) {
    todoApi.deleteTodo(todoId);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_TODO,
      todoId: todoId 
    });
  }
};

module.exports = TodoActionCreator;