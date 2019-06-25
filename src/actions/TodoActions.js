const Types = {
    FETCH_LIST: 'FETCH_LIST',
    ADD_TO_LIST: 'ADD_TO_LIST'
};

//action is just an object represent action type and payload
const fetchList = () => {
    return { type: Types.FETCH_LIST };
};

const addToList = (data) => {
    return { 
        type: Types.ADD_TO_LIST,
        payload: data
     }
}

export {Types, fetchList, addToList};