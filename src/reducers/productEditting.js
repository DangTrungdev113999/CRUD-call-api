import * as Types from './../constants/ActionTypes';

const initialState = {
    id: '', 
    name: '',
    price: '',
    status: false
};


const myReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return {...state};
    }
}

export default myReducer;