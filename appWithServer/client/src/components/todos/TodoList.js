'use strict';

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');
var TodoActionCreator = require('../../actions/todoActionCreator');
var CheckboxInput = require('../common/CheckboxInput');


var TodoList = React.createClass({


  updateTodo: function (todo, event) {
    event.preventDefault();
    todo.completed ? todo.completed = false : todo.completed = true;
    TodoActionCreator.updateTodo(todo);
  },
  
  deleteTodo: function (todo, event) {
    event.preventDefault();
    TodoActionCreator.deleteTodo(todo);
  },

  render: function () {
    var output;
    
    var createTodoRow = function (todo) {
      var tdClass = '';
      var todoTitle = todo.title;
      var todoDescription = todo.description;
      
      if (todo.completed) {
        tdClass = 'todo-done';
        todoTitle = (<s>{todo.title}</s>);
        todoDescription = (<s>{todo.description}</s>);
      }
      
      return (
        <tr key={todo._id}>
          <td className={tdClass}><Link to={'/manage-todo/' + todo._id}>{todoTitle}</Link></td>
          <td className={tdClass}>{todoDescription}</td>
          <td><a href="#" onClick={this.deleteTodo.bind(this, todo)}>Delete</a></td>
          <td>
            <CheckboxInput
              checked={todo.completed}
              updateTodo={this.updateTodo.bind(this, todo)}
            />
          </td>
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
              <th>Title</th>
              <th>Description</th>
              <th></th>
              <th></th>
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