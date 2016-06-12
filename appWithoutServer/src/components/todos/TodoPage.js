'use strict';

var React = require('react');
var Link = require('react-router').Link;
var TodoList = require('./TodoList');
var TodoStore = require('../../stores/todoStore');


var Todos = React.createClass({

  getInitialState: function () {
    return {
      todos: TodoStore.getAllTodos()
    };
  },

  // Start listening to the TodoStore 
  componentWillMount: function () {
    TodoStore.addChangeListener(this.onChange);
  },

  // Stop listening to the TodoStore 
  componentWillUnmount: function () {
    TodoStore.removeChangeListener(this.onChange);
  },
  
  onChange: function () {
    this.setState({
      todos: TodoStore.getAllTodos()
    });
  },

  render: function () {
    return (
      <div>
        <h2>Things we need to get done</h2>
        <Link className="btn btn-success btn-sm" to="/manage-todo">Add a Todo</Link>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
});

module.exports = Todos;