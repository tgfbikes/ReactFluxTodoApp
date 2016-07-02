'use strict';

var React = require('react');
var Link = require('react-router').Link;


var Header = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="images/anchor.jpg" width="50" height="50" />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todos">Todos</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;