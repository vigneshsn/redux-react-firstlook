import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { todoReducer } from './reducers/TodoReducer';
import getTodoList from './middleware/Todo'

//this code is for enabling redux devtools 
const enhancers = [];
const middleware = [getTodoList];
if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const reducers = combineReducers({todoReducer: todoReducer});
const store = createStore(reducers, {}, composedEnhancers);

export default store;