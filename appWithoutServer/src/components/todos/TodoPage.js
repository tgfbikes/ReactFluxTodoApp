'use strict';

var React = require('react');
var todoApi = require('../../mockApi/todoApi');


var Todos = React.createClass({

  getInitialState: function () {
    return {
      todos: []
    };
  },

  componentWillMount: function () {
    this.setState({
      todos: todoApi.getAllTodos()
    })
  },

  render: function () {
    var createTodoRow = function (todo) {
      return (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td><a href={"/#todos/" + todo.id}>{todo.title}</a></td>
          <td>{todo.description}</td>
        </tr>
      );
    };

    return (
      <div>
        <h2>Things we need to get done</h2>

        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </thead>
          <tbody>
            {this.state.todos.map(createTodoRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Todos;