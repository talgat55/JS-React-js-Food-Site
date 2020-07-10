import {ADD_TO_CART, DECREMENT_COUNT_CART, INCREMENT_COUNT_CART, RECALCULATE_TOTAL_CART, SET_CART_ITEM} from "./types";

const initialState = {
    data: [],
    count: 0,
    total: 0
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        case RECALCULATE_TOTAL_CART:
            return {
                ...state,
                total: action.payload
            };



        case INCREMENT_COUNT_CART:
            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT_COUNT_CART:
            return {
                ...state,
                count: state.count - 1
            };


        default:
            return state;
    }
};