'use strict';

var React = require('react');


var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>These technologies are what we are going to be learning about and using.</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
          <li>And possibly some Babel action</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;