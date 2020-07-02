import {ADD_TO_CART_SAGA, DECREMENT_CART_SAGA} from "./types";


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


