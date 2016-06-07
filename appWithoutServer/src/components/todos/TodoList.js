'use strict';

var React = require('react');
var Link = require('react-router').Link;


var TodoList = React.createClass({

  render: function () {
    var createTodoRow = function (todo) {
      return (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td><Link to={'/manage-todo/' + todo.id}>{todo.title}</Link></td>
          <td>{todo.description}</td>
        </tr>
      );
    };

    return (
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </thead>
          <tbody>
            {this.props.todos.map(createTodoRow, this)}
          </tbody>
        </table>
    );
  }

});

module.exports = TodoList;