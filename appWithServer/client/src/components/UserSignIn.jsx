'use strict';

var React = require('react');
var TextInput = require('./common/TextInput.jsx');
var EmailInput = require('./common/EmailInput.jsx');
var PasswordInput = require('./common/PasswordInput.jsx');


var UserSignIn = React.createClass({

  getInitialState: function () {
    return {
      dirty: false,
      errors: {},
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

    if (!this.isValid) {
      console.log('there is an error');
      return;
    }

    console.log('no errors');
  },

  isValid: function (event) {
    var formIsValid = true;
    var newErrors = Object.assign({}, this.state.errors);

    switch (event.target.name) {
      case 'name':
        if (this.state.user.name.length < 1) {
          newErrors.name = 'Name is required and cannot be blank';
          formIsValid = false;
        }
        break;
      case 'email':
        if (this.state.user.email.length < 1) {
          newErrors.email = 'Email is required and cannot be blank';
          formIsValid = false;
        }
        break;
      case 'password':
        if (this.state.user.password.length < 1) {
          newErrors.password = 'Password is required and cannot be blank';
          formIsValid = false;
        }
        break;
      default:
    }

    this.setState({
      errors: newErrors
    });

    return formIsValid;
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
            error={this.state.errors.name}
            onChange={this.setUserState}
            onBlur={this.isValid}
          />
          <EmailInput
            name="email"
            placeholder="youremail@example.com"
            value={this.state.user.email}
            error={this.state.errors.email}
            onChange={this.setUserState}
            onBlur={this.isValid}
          />
          <PasswordInput
            name="password"
            placeholder="Password"
            value={this.state.user.password}
            error={this.state.errors.password}
            onChange={this.setUserState}
            onBlur={this.isValid}
          />
        </form>
      </div>
    );
  }

});

module.exports = UserSignIn;
