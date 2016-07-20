'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require('../helpers/api');
var toastr = require('toastr');

var UserActionCreator = {
  createUser: function (user) {
    var newUserPromise = API.createUser(user);

    newUserPromise
      .done(function (newUser) {
        Dispatcher.dispatch({
          actionType: ActionTypes.CREATE_USER,
          user: newUser
        });
      })
      .fail(function (xhr, status, err) {
        toastr.error('Create user failed', 'SIGN IN ERROR');
      });
  }
}

module.exports = UserActionCreator;
