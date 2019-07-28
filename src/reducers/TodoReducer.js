import { Types } from "../actions/TodoActions";

const initialState = {
  data: []
};

//pure functions - should not mutate the state.
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_LIST: {
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      console.log("default block");
      return state;
    }
  }
};

export default todoReducer;
