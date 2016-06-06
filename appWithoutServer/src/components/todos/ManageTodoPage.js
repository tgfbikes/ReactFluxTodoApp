'use strict';

var React = require('react');
var hashHistory = require('react-router').hashHistory;
var TodoForm = require('./TodoForm');
var todoApi = require('../../mockApi/todoApi');


var ManageTodoPage = React.createClass({

  getInitialState: function () {
    return {
      todo: {
        id: '',
        title: '',
        description: '',
        completed: false
      }
    };
  },

  setTodoState: function (event) {
    var field = event.target.name;
    var value = event.target.value;
    var newTodo = Object.assign({}, this.state.todo);
    
    newTodo[field] = value;
    this.setState({
      todo: newTodo
    });
  },

  saveTodo: function (event) {
    event.preventDefault();
    todoApi.saveTodo(this.state.todo);
    hashHistory.push('/todos');
  },
  
  render: function () {
    return (
      <div>
        <h1>Manage Todos</h1>
        <TodoForm 
          todo={this.state.todo}
          onChange={this.setTodoState}
          onSave={this.saveTodo}
        />
      </div>
    );
  }
  
});

module.exports = ManageTodoPage;