import {SET_PRODUCTS_DATA} from "./types";
const initialState = [];
export const productReducer =  (state = initialState, action) =>{
    switch (action.type) {
        case SET_PRODUCTS_DATA:
            return  action.payload ;
        default:
            return state;
    }
};