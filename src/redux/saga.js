import {put, takeEvery, call} from 'redux-saga/effects';
import {ADD_TO_CART, ADD_TO_CART_SAGA, INCREMENT_COUNT_CART} from "./types";

export function* sagaWatcher() {
    yield takeEvery(ADD_TO_CART_SAGA, addToCart);
};


function* addToCart(action){
    try{

        yield put({type: ADD_TO_CART, payload: action.payload});
        yield put({type: INCREMENT_COUNT_CART });

    } catch (e) {
        console.log(e);
    }
}