import storageReducer from "./storage";
import questionReducer from "./questions";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    storage: storageReducer,
    questions: questionReducer,
});

const store = createStore(rootReducer);

export default store;
