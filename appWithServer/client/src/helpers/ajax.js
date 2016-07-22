'use strict';

var $ = require('jquery');
var UserStore = require('../stores/userStore');

var ajax = function (url, data, type='POST') {

    var authString;

    if (UserStore.getUser()) {
        authString = 'Basic ' + btoa(user.name + ':' + user.password);
    } else {
        authString = 'Basic ' + btoa('falseuser:falsepassword');
    }

  var user = UserStore.getUser();

  return $.ajax({
    url: 'http://localhost:9005' + url,
    datatype: 'json',
    contentType: 'application/json',
    type: type,
    data: JSON.stringify(data),
    headers: {
        Authorization: authString
    }
  });
};

module.exports = ajax;
