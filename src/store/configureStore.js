import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import rootReducer from "./rootReducer";


export function configureStore(){
    return createStore(rootReducer,devToolsEnhancer())
}