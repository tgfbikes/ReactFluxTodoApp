'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _todos = [];

var TodoStore = Object.assign({}, EventEmitter.prototype, {

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllTodos: function () {
    return _todos;
  },

  getTodoById: function (id) {
    return _.find(_todos, {id : id});
  }

});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _todos = action.initialData.todos;
      TodoStore.emitChange();
      break;
    case ActionTypes.CREATE_TODO:
      _todos.push(action.todo);
      TodoStore.emitChange();
      break;
    case ActionTypes.UPDATE_TODO:
      var existingTodo = _.find(_todos, {id: action.todo.id});
      var existingTodoIndex = _.indexOf(_todos, existingTodo);
      _todos.splice(existingTodoIndex, 1, action.todo);
      TodoStore.emitChange();
      break;
    case ActionTypes.DELETE_TODO:
      console.log(action.todoId);
      _.remove(_todos, {id: action.todoId});
      TodoStore.emitChange();
      break;
    default:
      // do nothing
  }
});

module.exports = TodoStore;