import { Types, setList } from "../actions/TodoActions";
import aioxsHttpClient from "../httpclient";
import Axios from "axios";

//this method will be called for every action dispatched
//return immediately, if it is not the one your are expecting
const getTodoList = store => next => action => {
  next(action); //check why this is required here

  if (action.type !== Types.FETCH_LIST) {
    return;
  }

  const dispatch = store.dispatch;
  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(data => data.json())
  // .then(resp => dispatch(setList(resp)));
  const tokenSource = Axios.CancelToken.source();
  console.log(tokenSource.token);

  aioxsHttpClient
    .get("/todos", { cancelToken: tokenSource.token })
    .then(response => {
      console.log(JSON.stringify(response.headers));
      console.log(JSON.stringify(response.data));
      dispatch(setList(response.data));
    });

  //tokenSource.cancel("Operation cancelled - testing");
};

export default getTodoList;
