'use strict';

var React = require('react');
var Link = require('react-router').Link;
var TodoActionCreator = require('../../actions/todoActionCreator');
var toastr = require('toastr');


var TodoList = React.createClass({

  deleteTodo: function (todoId, event) {
    event.preventDefault();
    TodoActionCreator.deleteTodo(todoId);
    toastr.success('Todo Deleted...hooray...');
  },

  render: function () {
    var createTodoRow = function (todo) {
      return (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td><Link to={'/manage-todo/' + todo.id}>{todo.title}</Link></td>
          <td>{todo.description}</td>
          <td><a href="#" onClick={this.deleteTodo.bind(this, todo.id)}>Delete</a></td>
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