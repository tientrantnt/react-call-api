import * as Types from './../constants/ActionTypes';

const productsInitialState = [];
const products = (state = productsInitialState, action) => {
    var index = -1 ;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case Types.ADD_PRODUCT:
            state.push( action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = state.findIndex( index => index.id === action.product.id);
            state[index] = action.product;
        return [...state];
        case Types.DELETE_PRODUCT:
            index = state.findIndex( index => index.id === action.id);
            if(index !== -1){
                state.splice(index,1);
            }
            return [...state];      
        default:
            return [...state]
    }
}

export default products;