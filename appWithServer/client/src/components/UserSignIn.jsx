'use strict';

var React = require('react');
var TextInput = require('./common/TextInput.jsx');
var EmailInput = require('./common/EmailInput.jsx');
var PasswordInput = require('./common/PasswordInput.jsx');


var UserSignIn = React.createClass({

  getInitialState: function () {
    return {
      dirty: false,
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },

  setUserState: function (event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    var newUser = Object.assign({}, this.state.user);
    
    newUser[field] = value;
    this.setState({
      user: newUser
    });
  },

  saveUser: function (event) {
    event.preventDefault();
  },

  isName: function () {
    console.log('isName');
  },

  isEmail: function () {
    console.log('email');
  },

  isPassword: function () {
    console.log('password');
  },


  render: function () {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.saveUser}>
          <TextInput
            name="name"
            placeholder="Name"
            autoFocus={true}
            value={this.state.user.name}
            onChange={this.setUserState}
            onBlur={this.isName}
          />
          <EmailInput
            name="email"
            placeholder="youremail@example.com"
            value={this.state.user.email}
            onChange={this.setUserState}
            onBlur={this.isEmail}
          />
          <PasswordInput
            name="password"
            placeholder="Password"
            value={this.state.user.password}
            onChange={this.setUserState}
            onBlur={this.isPassword}
          />
        </form>
      </div>
    );
  }

});

module.exports = UserSignIn;
