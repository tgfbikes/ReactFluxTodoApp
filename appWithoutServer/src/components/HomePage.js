'use strict';

var React = require('react');


var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>Torpedos</h1>
        <p>Let's sink some tasks</p>
      </div>
    );
  }
});

module.exports = Home;