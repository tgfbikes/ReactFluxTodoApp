'use strict';

var React = require('react');
var TextInput = require('../common/TextInput');


var TodoForm= React.createClass({

  render: function () {
    return (
      <form onSubmit={this.props.onSave}>
        <h3>Todo Form</h3>
        <TextInput
          name="title"
          label="title"
          placeholder="Title"
          value={this.props.todo.value}
          error={this.props.errors.title}
          onChange={this.props.onChange}
        />
        <TextInput
          name="description"
          label="description"
          placeholder="Description"
          value={this.props.todo.value}
          error={this.props.errors.description}
          onChange={this.props.onChange}
        />
        <input type="submit" value="Save" className="btn btn-success btn-lg" />
      </form>
    );
  }

});

module.exports = TodoForm;
