'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var toastr = require('toastr');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _user = {
  name: '',
  password: ''
}

function _saveUserToLocalStorage (user) {
    _user = Object.assign({}, user);
    localStorage.setItem('user', JSON.stringify(_user));
}

function _getUserFromLocalStorage () {
    return JSON.parse(localStorage.getItem('user'));
}

function _deleteUser () {
    _user = {
        name: '',
        password: ''
    };
}

var UserStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getUser: function () {
        return _getUserFromLocalStorage();
    }

});

Dispatcher.register(function (action) {
    switch (action.actionType) {
      case ActionTypes.CREATE_USER:
        _saveUserToLocalStorage(action.user);
        toastr.success('Successful Login', 'LOGIN SUCCESS');
        UserStore.emitChange();
        break;
    case ActionTypes.DELETE_USER:
        _deleteUser();
        toastr.info('Successful Logout', 'LOGOUT SUCCESS');
        UserStore.emitChange();
        break;
    default:
        console.log('default case excecuted');
    }
});

module.exports = UserStore;
