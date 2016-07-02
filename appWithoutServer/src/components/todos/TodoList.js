'use strict';

var React = require('react');
var Link = require('react-router').Link;
var TodoActionCreator = require('../../actions/todoActionCreator');
var toastr = require('toastr');


var TodoList = React.createClass({


  updateTodo: function (todo, event) {
    event.preventDefault();
    TodoActionCreator.updateTodo(todo, true);
    toastr.success('Todo Completed.');
  },
  
  deleteTodo: function (todoId, event) {
    console.log(this);
    event.preventDefault();
    TodoActionCreator.deleteTodo(todoId);
    toastr.success('Todo Deleted...hooray...');
  },

  render: function () {
    var createTodoRow = function (todo) {
      var getDescription = function () {
        if (todo.done) {
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
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td><Link to={'/manage-todo/' + todo.id}>{todo.title}</Link></td>
          <td>{getDescription()}</td>
          <td><a href="#" onClick={this.deleteTodo.bind(this, todo.id)}>Delete</a></td>
          <td><a href="#" onClick={this.updateTodo.bind(this, todo)}>Mark as Done</a></td>
        </tr>
      );
    };

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
            {this.props.todos.map(createTodoRow, this)}
          </tbody>
        </table>
    );
  }

});

module.exports = TodoList;