import {put, takeEvery, call, select} from 'redux-saga/effects';
import {
    ADD_TO_CART,
    ADD_TO_CART_SAGA,
    DECREMENT_CART_SAGA,
    DECREMENT_COUNT_CART,
    INCREMENT_COUNT_CART,
    REQUEST_PRODUCTS_DATA_SAGA, SET_PRODUCTS_DATA
} from "./types";
import {getCartCount} from "./selectorsSaga";
import {getProducts} from "../api/products";

export function* sagaWatcher() {
    yield takeEvery(ADD_TO_CART_SAGA, addToCart);
    yield takeEvery(DECREMENT_CART_SAGA, decrementCartCount);
    yield takeEvery(REQUEST_PRODUCTS_DATA_SAGA, requestGetProducts);
};


function* addToCart(action){
    try{

        yield put({type: ADD_TO_CART, payload: action.payload});
        yield put({type: INCREMENT_COUNT_CART });

    } catch (e) {
        console.log(e);
    }
}


function* decrementCartCount(){

    try{
        const cartCount = yield select(getCartCount);
        if(cartCount > 0){
            yield put({type: DECREMENT_COUNT_CART });
        }

    } catch (e) {
        console.log(e);
    }
}


function* requestGetProducts(){

    try{

        let dataProducts = yield  getProducts();
        yield put({
            type: SET_PRODUCTS_DATA,
            payload: dataProducts.data });
    } catch (e) {
        console.log(e);
    }
}