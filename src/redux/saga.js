import {put, takeEvery, call, select} from 'redux-saga/effects';
import {ADD_TO_CART, ADD_TO_CART_SAGA, DECREMENT_CART_SAGA, DECREMENT_COUNT_CART, INCREMENT_COUNT_CART} from "./types";
import {getCartCount} from "./selectorsSaga";

export function* sagaWatcher() {
    yield takeEvery(ADD_TO_CART_SAGA, addToCart);
    yield takeEvery(DECREMENT_CART_SAGA, decrementCartCount);
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