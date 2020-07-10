import {put, takeEvery, select} from 'redux-saga/effects';
import {
    ADD_TO_CART,
    ADD_TO_CART_SAGA,
    DECREMENT_CART_SAGA,
    DECREMENT_COUNT_CART,
    INCREMENT_COUNT_CART, RECALCULATE_TOTAL_CART,
    REQUEST_PRODUCTS_DATA_SAGA, SET_PRODUCTS_DATA
} from "./types";
import {getCartCount, getProductsSelector, getCartItems} from "./selectorsSaga";
import {getProducts} from "../api/products";

export function* sagaWatcher() {
    yield takeEvery(ADD_TO_CART_SAGA, addToCart);
    yield takeEvery(DECREMENT_CART_SAGA, decrementCartCount);
    yield takeEvery(REQUEST_PRODUCTS_DATA_SAGA, requestGetProducts);
};

/**
 * Add to cart
 * @param action
 * @returns {Generator<<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|<"SELECT", SelectEffectDescriptor>|<"PUT", PutEffectDescriptor<{type: string}>>, void, ?>}
 */
function* addToCart(action) {
    try {

        const allProducts = yield select(getProductsSelector);
        let objectCart = allProducts.filter(item => item.id === action.payload);
        yield put({type: ADD_TO_CART, payload: objectCart['0']});

        const cartItems = yield select(getCartItems);
        let totalCart =   cartItems.reduce((total, amount) => {
            return total + parseInt(amount.price);
        }, 0);
        yield put({type: RECALCULATE_TOTAL_CART, payload: totalCart});
        yield put({type: INCREMENT_COUNT_CART});

    } catch (e) {
        console.log(e);
    }
}

/**
 *  Decrement from cart
 * @returns {Generator<<"SELECT", SelectEffectDescriptor>|<"PUT", PutEffectDescriptor<{type: string}>>, void, ?>}
 */
function* decrementCartCount() {

    try {
        const cartCount = yield select(getCartCount);
        if (cartCount > 0) {
            yield put({type: DECREMENT_COUNT_CART});
        }

    } catch (e) {
        console.log(e);
    }
}

/**
 *   Get products
 * @returns {Generator<<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|Promise<*>, void, ?>}
 */
function* requestGetProducts() {

    try {

        let dataProducts = yield  getProducts();
        yield put({
            type: SET_PRODUCTS_DATA,
            payload: dataProducts.data
        });
    } catch (e) {
        console.log(e);
    }
}