'use strict';

var React = require('react');
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
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
});

module.exports = Todos;