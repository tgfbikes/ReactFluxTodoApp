'use strict';

var React = require('react');
var Router = require('react-router').Router;
var Header = require('./common/Header');
var ajax = require('../helpers/ajax');

var App = React.createClass({
  
  componentWillMount: function () {
    var url = '/todos';
    var data = {};
    var method = 'GET';
    
    var success = function (data) {
      console.log(data);
    };
    
    var error = function (xhr, status, err) {
      console.log('XHR: ' + xhr);
      console.log('Status: ' + status);
      console.log('Error: ' + err);
    };
    
    ajax(url, data, success, error, method);
  },
  
  render: function () {
    
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
    
  }
  
});

module.exports = App;
