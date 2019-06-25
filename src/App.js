import React from 'react';
import './App.css';
import Todo from './components/todo';

//simple component - Parent to Todo
class App extends React.Component {

  render() {
    return (
      <div>
      <Todo
        todoList={this.props.todoList}
      />
      <a href="javascript:void(0)" onClick={() => this.props.fetchTodoList()}>Refresh</a>
    </div>
    );
  };

  //life cycle method- call immediately before render method (mounting)
  componentWillMount() {
    //this will dispatch an action to load todolist from server.
    this.props.fetchTodoList();
  }
}

export default App;
