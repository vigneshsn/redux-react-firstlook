import React from "react";

//dump component - no buisness logic only rendering logic
//used to render data
class Todo extends React.Component {
  render() {
    const todos = this.props.todoList.map(val => (
      <li key={val.id}>{val.title}</li>
    ));

    return (
      <div data-test="todoComponent">
        <h1>My Todo list</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default Todo;
