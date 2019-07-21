import * as Types from './../constants/ActionTypes';

const initialState = []

const findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if(product.id === id) {
            result = index;
        }
    });
    return result;
}

const myReducer = (state = initialState, action) => {
    let index = -1;
    switch(action.type) {
        case Types.FETCH_PRODUCTS: 
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            if(index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.SAVE_PRODUCT:
            state.push(action.product);
            return [...state]
        default: return [...state]
    }
}

export default myReducer;