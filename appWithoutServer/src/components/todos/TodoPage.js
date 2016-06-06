'use strict';

var React = require('react');
var Link = require('react-router').Link;
var TodoList = require('./TodoList');
var todoApi = require('../../mockApi/todoApi');


var Todos = React.createClass({

  getInitialState: function () {
    return {
      todos: []
    };
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({
        todos: todoApi.getAllTodos()
      });
    }
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