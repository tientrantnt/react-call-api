import * as Types from './../constants/ActionTypes';

const productsInitialState = [];
const products = (state = productsInitialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];      
        default:
            return [...state]
    }
}

export default products;