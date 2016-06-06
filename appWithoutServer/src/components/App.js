'use strict';

var React = require('react');
var Router = require('react-router').Router;
var Header = require('./common/Header');

var App = React.createClass({
  
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
