import storageReducer from "./storage";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ storage: storageReducer });

const store = createStore(rootReducer);

export default store;
