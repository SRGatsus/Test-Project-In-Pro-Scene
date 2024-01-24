import {configureStore} from "@reduxjs/toolkit"
import {reducers} from "./routerReducer.js";
import {loadState} from "../utils/localStorage.js";

const persistedState = loadState();

export  const  store = configureStore({
    reducer:reducers,
    preloadedState:persistedState,
})
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})