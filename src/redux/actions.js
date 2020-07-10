import {ADD_TO_CART_SAGA, DECREMENT_CART_SAGA, REQUEST_PRODUCTS_DATA_SAGA} from "./types";

/**
 *  Add to cart by Id
 * @param id
 * @returns {{payload: *, type: string}}
 */
export function addToCartAction(id) {
    return{
        type: ADD_TO_CART_SAGA,
        payload: id
    }
}

/**
 *  Decrement from Cart
 * @returns {{type: string}}
 */
export function decrementCartCount() {
    return{
        type: DECREMENT_CART_SAGA
    }
}

/**
 *  Get products
 * @returns {{type: string}}
 */
export function requestGetProducts() {
    return{
        type: REQUEST_PRODUCTS_DATA_SAGA
    }
}




