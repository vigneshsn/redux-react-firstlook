import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const rootReducer = combineReducers({
  todoReducer: TodoReducer
});

export default rootReducer;
