import * as Types from './../constants/ActionTypes';

const initialState = [
    {
        id: 1,
        name: 'iphone',
        price: 1200,
        status: true
    },
    {
        id: 1,
        name: 'samsung',
        price: 1200,
        status: false
    },
    {
        id: 1,
        name: 'opppo',
        price: 1200,
        status: true
    }
]

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default myReducer;