'use strict';

var React = require('react');
// var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var TodoForm = require('./TodoForm');
var TodoActionCreator = require('../../actions/todoActionCreator');
var TodoStore = require('../../stores/todoStore');
var todoApi = require('../../mockApi/todoApi');
var toastr = require('toastr');


var ManageTodoPage = React.createClass({

  getInitialState: function () {
    return {
      errors: {},
      todo: {
        title: '',
        description: '',
        completed: false
      }
    };
  },

  componentWillMount: function () {
    var todoId = this.props.params.id; // from the path 'todo/id'
    if (todoId) {
      this.setState({
        todo: TodoStore.getTodoById(todoId)
      });
    }
  },

  setTodoState: function (event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    var newTodo = Object.assign({}, this.state.todo);
    
    newTodo[field] = value;
    this.setState({
      todo: newTodo
    });
  },
  
  clearPreviousErrors: function () {
    this.setState({
      errors: {}
    });
  },

  todoFormIsValid: function () {
    var formIsValid = true;
    var newErrors = {};
    this.clearPreviousErrors();
    
    if (this.state.todo.title.length < 1) {
      newErrors.title = 'Title cannot be blank...silly goose';
      formIsValid = false;
    }
    
    if (this.state.todo.description.length < 1) {
      newErrors.description = 'Description cannot be blank...crazy pants';
      formIsValid = false;
    }
    
    this.setState({
      errors: newErrors
    });
    
    return formIsValid;
  },

  saveTodo: function (event) {
    event.preventDefault();

    if (!this.todoFormIsValid()) {
      return;
    }
    
    if (this.state.todo._id) {
      TodoActionCreator.updateTodo(this.state.todo);
    } else {
      TodoActionCreator.createTodo(this.state.todo);
    }
    
    toastr.success('Todo Saved');
    browserHistory.push('/todo-page');
  },
  
  render: function () {
    return (
      <div>
        <h1>Manage Todos</h1>
        <TodoForm 
          todo={this.state.todo}
          onChange={this.setTodoState}
          onSave={this.saveTodo}
          errors={this.state.errors}
        />
      </div>
    );
  }
  
});

module.exports = ManageTodoPage;