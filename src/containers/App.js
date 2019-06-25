
import { fetchList } from '../actions/TodoActions';
import { connect } from 'react-redux';
import App from '../App';

//subscribes store data to component props
const mapStateToProps = state => ({
    todoList: state.todoReducer.data
});

//wraps Actions inside store dispatch method and map it to component props
const mapDispatchToProps = dispatch => ({
    fetchTodoList: () => dispatch(fetchList())
});

//returns just a wrapper of component with subscription to store
export default connect(mapStateToProps, mapDispatchToProps)(App);