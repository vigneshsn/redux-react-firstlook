import React from "react";
import "./App.css";
import Todo from "./components/todo";

//simple component - Parent to Todo
class App extends React.Component {
  render() {
    return (
      <div data-test="appComponent">
        <Todo todoList={this.props.todoList} />
        <a href="javascript:void(0)" onClick={() => this.props.fetchTodoList()}>
          Refresh
        </a>
      </div>
    );
  }

  //life cycle method- call immediately before render method (mounting)
  componentWillMount() {
    //this will dispatch an action to load todolist from server.
    this.props.fetchTodoList();

    // .then(res => {
    //   console.log("inside then");
    //   console.log(JSON.stringify(res));
    // });

    // this.props.todoList.subscribe(data => {
    //   console.log(JSON.stringify(data));
    // });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(JSON.stringify(prevProps.todoList));
  //   console.log(JSON.stringify(prevState));
  //   console.log(JSON.stringify(this.props.todoList));
  // }
}

export default App;
