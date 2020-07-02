import {ADD_TO_CART, INCREMENT_COUNT_CART, SET_CART_ITEM} from "./types";
const initialState = {
    data: [],
    count: 0
};
export const cartReducer =  (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                data:[...state.data, action.payload]
            };

        case INCREMENT_COUNT_CART:
            return {
                ...state,
                count:  state.count + 1
            };




        default:
            return state;
    }
};