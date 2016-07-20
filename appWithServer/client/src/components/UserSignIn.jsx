'use strict';

var React = require('react');
var TextInput = require('./common/TextInput.jsx');
var EmailInput = require('./common/EmailInput.jsx');
var PasswordInput = require('./common/PasswordInput.jsx');
var UserActionCreator = require('../actions/userActionCreator');


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

    if (!this.isFormValid()) {
      return;
    }

    UserActionCreator.createUser(this.state.user)

  },

  isNameValid: function () {
    var newErrors = Object.assign({}, this.state.errors);

    if (this.state.user.name.length < 1) {
      newErrors.name = 'Name is required and cannot be blank';
    } else {
      newErrors.name = '';
    }
    this.setState({
      errors: newErrors
    });
  },

  isEmailValid: function () {
    var emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var newErrors = Object.assign({}, this.state.errors);

    if (!emailRE.test(this.state.user.email)) {
      newErrors.email = 'This is not a valid email';
    } else {
      newErrors.email = '';
    }
    this.setState({
      errors: newErrors
    });
  },

  isPasswordValid: function () {
    var passwordRE = /[A-Za-z0-9]{8,}/;
    var newErrors = Object.assign({}, this.state.errors);

    if (!passwordRE.test(this.state.user.password)) {
      newErrors.password = 'Password must be 8 characters or more';
    } else {
      newErrors.password = '';
    }
    this.setState({
      errors: newErrors
    });
  },

  isFormValid: function () {
    var formIsValid = true;
    var newErrors = Object.assign({}, this.state.errors);

    for (var key in this.state.user) {
      if (this.state.user[key].length < 1) {
        newErrors[key] = 'Field cannot be blank';
        formIsValid = false;
        this.setState({
          errors: newErrors
        });
      }
    }

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
            onBlur={this.isNameValid}
          />
          <EmailInput
            name="email"
            placeholder="youremail@example.com"
            value={this.state.user.email}
            error={this.state.errors.email}
            onChange={this.setUserState}
            onBlur={this.isEmailValid}
          />
          <PasswordInput
            name="password"
            placeholder="Password"
            value={this.state.user.password}
            error={this.state.errors.password}
            onChange={this.setUserState}
            onBlur={this.isPasswordValid}
          />
          <input className="btn btn-default" type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

});

module.exports = UserSignIn;
