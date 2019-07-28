import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import middleware from "./middleware";

//this code is for enabling redux devtools
const enhancers = [];
//const middleware = [getTodoList];
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

const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
