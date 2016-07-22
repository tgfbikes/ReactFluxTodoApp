'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require('../helpers/api');
var toastr = require('toastr');
var SHA256 = require('crypto-js/sha256');

var UserActionCreator = {
  createUser: function (user) {
    var newUserPromise = API.createUser(user);
    var userPasswordHash = SHA256(user.password);

    newUserPromise
      .done(function (newUser) {
        newUser.password = userPasswordHash;
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
