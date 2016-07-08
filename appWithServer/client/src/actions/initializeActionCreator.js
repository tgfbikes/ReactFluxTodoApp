'use strict';


var Dispatcher = require('../dispatcher/Dispatcher');
var API = require('../helpers/api');
var ActionTypes = require('../constants/actionTypes');
var toastr = require('toastr');

var InitializeActionCreator = {
  
  initializeApp: function () {
    var todosPromise = API.getAllTodos();
    
    todosPromise
      .then(function (todos) {
        Dispatcher.dispatch({
          actionType: ActionTypes.INITIALIZE,
          initialData: {
            todos: todos
          }
        });
      })
      .fail(function (xhr, status, err) {
        toastr.error('Something went wrong', 'ERROR');
      });
  }
  
};

module.exports = InitializeActionCreator;
