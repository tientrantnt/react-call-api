import * as Types from './../constants/ActionTypes';

const itemEditingInitialState = {};
const itemEditing = (state = itemEditingInitialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;  
        default:
            return state;
    }
}

export default itemEditing;