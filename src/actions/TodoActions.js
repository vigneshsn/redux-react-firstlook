const Types = {
    FETCH_LIST: 'FETCH_LIST',
    SET_LIST: 'SET_LIST'
};

//action is just an object represent action type and payload
const fetchList = () => {
    return { type: Types.FETCH_LIST };
};

const setList = (data) => {
    return { 
        type: Types.SET_LIST,
        payload: data
     }
}

export {Types, fetchList, setList};