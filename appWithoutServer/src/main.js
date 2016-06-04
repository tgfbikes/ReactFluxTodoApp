'use strict';

//bootstrap expects jquery to be in the global namespace
var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/HomePage');
var About = require('./components/about/AboutPage');
var Header = require('./components/common/Header');

var App = React.createClass({
  render: function () {
    var Child;

    // this prop is the route prop given below
    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      default: Child = Home;
    }

    return (
      <div>
        <Header />
        <Child />
      </div>
    );

  }
});

function render() {
  // Get current route
  var route = window.location.hash.substr(1);
  // Pass route as a prop to App
  ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

// Whenever there is a hash change, execute render function
window.addEventListener('hashchange', render);
render();

// The div with the id 'app' is the mounting point of the application
// ReactDOM.render(<Home />, document.getElementById('app'));
