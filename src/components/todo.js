import React from 'react';

//dump component - no buisness logic
//used to render data
class Todo extends React.Component {
    render() {
        return(
            <React.Fragment>
                { this.props.todoList && this.props.todoList.length > 0 && <h1>{this.props.todoList[0].title}</h1>}
            </React.Fragment>
        )
    }
}

export default Todo;