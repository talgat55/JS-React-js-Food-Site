import {combineReducers} from "redux";
import {settingsReducer} from "./settingsReducer";
import {cartReducer} from "./cartReducer";
export const rootReducer = combineReducers({
    settings: settingsReducer,
    cartReducer: cartReducer,
});