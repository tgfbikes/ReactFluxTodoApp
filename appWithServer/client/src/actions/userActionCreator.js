'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require('../helpers/api');

var UserActionCreator = {
    createUser: function () {
        console.log('user create action');
    }
}

module.exports = UserActionCreator;
