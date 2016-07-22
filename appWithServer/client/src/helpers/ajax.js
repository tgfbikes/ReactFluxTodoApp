'use strict';

var $ = require('jquery');
var UserStore = require('../stores/userStore');

var ajax = function (url, data, type='POST') {

    var authString;
    var user = UserStore.getUser();

    if (user) {
        authString = 'Basic ' + btoa(user.name + ':' + user.password);
    } else {
        authString = 'Basic ' + btoa('falseuser:falsepassword');
    }

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
