import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchAllProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchAllProducts(res.data));
        })
    }
}

export const actFetchAllProducts = products => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = id => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actSaveProductRequest = product => {
    return dispatch => {
        return callApi(`products`, 'POST', product).then(res => {
            dispatch(actSaveProduct(res.data));
        })
    }
}

export const actSaveProduct = product => {
    return {
        type: Types.SAVE_PRODUCT,
        product
    }
}
