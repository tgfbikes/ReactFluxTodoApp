'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require('../helpers/api');

var TodoActionCreator = {
  // the actual action creator
  createTodo: function (todo) {
    var newTodoPromise = API.createTodo(todo);
    
    newTodoPromise
      .then(function (newTodo) {
        Dispatcher.dispatch({
          actionType: ActionTypes.CREATE_TODO,  // This payload is the actual action
          todo: newTodo
        });
      });
  },

  updateTodo: function (todo, changeStatus) {
    var change = changeStatus || false;
    var updatedTodo = todoApi.saveTodo(todo, change); 

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