import {Types} from '../actions/TodoActions';

const initialState = {
    data: []
};

//pure functions - should not mutate the state.
export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        // case Types.FETCH_LIST: {
        //     console.log('fetch list called!!!');
        //     return {
        //         ...state,
        //         data: [{
        //             "userId": 1,
        //             "id": 1,
        //             "title": "delectus aut autem",
        //             "completed": false
        //         }]
        //     };
        // }
        case Types.ADD_TO_LIST: {
           return {
               ...state,
               data: action.payload
           }
        }
        default: {
            console.log('default block');
            return state;
        }
    }
};