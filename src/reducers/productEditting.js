import * as Types from './../constants/ActionTypes';

const initialState = {
    id: '', 
    name: '',
    price: '',
    status: false
};


const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.EDIT_PRODUCT: 
            return action.product;
        default: return {...state};
    }
}

export default myReducer;