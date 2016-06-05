'use strict';

var React = require('react');
var TextInput = require('../common/TextInput');


var TodoForm= React.createClass({

  render: function () {
    console.log(this.props);
    return (
      <form>
        <h3>Todo Form</h3>
        <TextInput
          name="Title"
          label="Title"
          placeholder="Title"
          value={this.props.todo.value}
          onChange={this.props.onChange}
        />
        <TextInput
          name="Description"
          label="Description"
          placeholder="Description"
          value={this.props.todo.value}
          onChange={this.props.onChange}
        />
        <input type="submit" value="Save" className="btn btn-success btn-lg" />
      </form>
    );
  }

});

module.exports = TodoForm;
