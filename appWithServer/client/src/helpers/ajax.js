'use strict';

var $ = require('jquery');

var ajax = function (url, data, type='POST') {

  return $.ajax({
    url: 'http://localhost:9005' + url,
    datatype: 'json',
    contentType: 'application/json',
    type: type,
    data: JSON.stringify(data),
  })
  .fail(function (xhr, status, err) {
    console.log('Get all todos failed!!!')
  });
};

module.exports = ajax;
