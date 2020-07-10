import {combineReducers} from "redux";
import {settingsReducer} from "./settingsReducer";
import {cartReducer} from "./cartReducer";
import {productReducer} from "./productReducer";
export const rootReducer = combineReducers({
    settings: settingsReducer,
    cartReducer: cartReducer,
    products: productReducer,
});