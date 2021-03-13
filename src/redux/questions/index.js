import { combineReducers } from "redux";

import mathReducer from "./math";
import readingReducer from "./reading";
import typingReducer from "./typing";

export default combineReducers({
    math: mathReducer,
    reading: readingReducer,
    typing: typingReducer,
});
