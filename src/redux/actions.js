import {ADD_TO_CART_SAGA, DECREMENT_CART_SAGA, REQUEST_PRODUCTS_DATA_SAGA} from "./types";


export function addToCartAction(id) {
    return{
        type: ADD_TO_CART_SAGA,
        payload: id
    }
}

export function decrementCartCount() {
    return{
        type: DECREMENT_CART_SAGA
    }
}


export function requestGetProducts() {
    return{
        type: REQUEST_PRODUCTS_DATA_SAGA
    }
}




