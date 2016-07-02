'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div className="jumbotron">
          <h1>Torpedos</h1>
          <p>Let's sink some tasks</p>
          <Link className="btn btn-info btn-lg" to="/about-page">Learn more</Link>
        </div>
        <div>
          <h2>Details about the app</h2>
          <p>This app is a basic todo app which shows off the basics of React, React Router, and Flux.  
          And through these technologies it performs CRUD operations by consuming a RESTful API.</p>
        </div>
      </div>
    );
  }
});

module.exports = Home;