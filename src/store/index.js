import { counterStore } from "./counter.js";
import { customersStore } from "./customors.js";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    counter: counterStore,
    customers: customersStore
});

export const store = createStore(rootReducer)