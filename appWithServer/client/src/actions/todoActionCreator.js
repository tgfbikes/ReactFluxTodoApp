'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require('../helpers/api');
var toastr = require('toastr');

var TodoActionCreator = {
  // the actual action creator
  createTodo: function (todo) {
    var newTodoPromise = API.createTodo(todo);
    
    newTodoPromise
      .done(function (newTodo) {
        console.log(newTodo);
        Dispatcher.dispatch({
          actionType: ActionTypes.CREATE_TODO,  // This payload is the actual action
          todo: newTodo
        });
      })
      .fail(function (xhr, status, err) {
        toastr.error('Create todo failed', 'CREATE ERROR');
      });
  },

  updateTodo: function (todo) {
    var updatedTodoPromise = API.updateTodo(todo);

    updatedTodoPromise
      .done(function (updatedTodo) {
        Dispatcher.dispatch({
          actionType: ActionTypes.UPDATE_TODO,
          todo: updatedTodo
        });
      })
      .fail(function (xhr, status, err) {
        toastr.error('Update todo failed', 'UPDATE ERROR');
      });
  },
  
  deleteTodo: function (todo) {
    var deleteTodoPromise = API.deleteTodo(todo);

    deleteTodoPromise
      .done(function () {
        Dispatcher.dispatch({
          actionType: ActionTypes.DELETE_TODO,
          todoId: todo._id
        });
      })
      .fail(function (xhr, status, err) {
        toastr.error('Delete todo failed', 'DELETE ERROR');
      });
  }
};

module.exports = TodoActionCreator;