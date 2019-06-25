import {Types, setList} from '../actions/TodoActions'

//this method will be called for every action dispatched
//return immediately, if it is not the one your are expecting
const getTodoList = store => next => action => {

    next(action);//check why this is required here

    if(action.type !== Types.FETCH_LIST) {
        return;
    }

    const dispatch = store.dispatch;
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(resp => dispatch(setList(resp)));
};

export default getTodoList;