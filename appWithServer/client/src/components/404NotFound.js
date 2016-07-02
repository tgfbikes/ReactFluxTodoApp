'use strict';

var React = require('react');
var Link = require('react-router').Link;


var NotFoundPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Wow...this is embarrassing...</h1>
        <p>Nothing found, sorry about that</p>
        <p><Link to="/">Go back to home</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;