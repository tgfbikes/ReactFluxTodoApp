'use strict';

var React = require('react');
var Link = require('react-router').Link;
var TodoActionCreator = require('../../actions/todoActionCreator');
var toastr = require('toastr');
var TodoStore = require('../../stores/todoStore');


var TodoList = React.createClass({


  updateTodo: function (todo, event) {
    event.preventDefault();
    if (todo.completed) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }
    TodoActionCreator.updateTodo(todo);
    toastr.success('Todo Completed.');
  },
  
  deleteTodo: function (todo, event) {
    event.preventDefault();
    TodoActionCreator.deleteTodo(todo);
  },

  render: function () {
    var output;
    var createTodoRow = function (todo) {
      var getDescription = function () {
        if (todo.completed) {
          return (
            <s>{todo.description}</s>
          );
        } else {
          return (
            <span>{todo.description}</span>
          );
        }
      };
      return (
        <tr key={todo._id}>
          <td>{todo._id}</td>
          <td><Link to={'/manage-todo/' + todo._id}>{todo.title}</Link></td>
          <td>{getDescription()}</td>
          <td><a href="#" onClick={this.deleteTodo.bind(this, todo)}>Delete</a></td>
          <td><a href="#" onClick={this.updateTodo.bind(this, todo)}>Mark as Done</a></td>
        </tr>
      );
    };
    
    if (this.props.todos.length > 0) {
      output = this.props.todos.map(createTodoRow, this);
    } else {
      output = (
        <tr><td>You have nothing to do</td></tr>
      );
    }

    return (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {output}
          </tbody>
        </table>
    );
  }

});

module.exports = TodoList;