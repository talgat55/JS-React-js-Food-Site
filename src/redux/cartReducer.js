import {ADD_TO_CART, SET_CART_ITEM} from "./types";
const initialState = {
    data: []
};
export const cartReducer =  (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                data:[...state.data, action.payload]
            };
        default:
            return state;
    }
};