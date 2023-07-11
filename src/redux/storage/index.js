import { combineReducers } from "redux";

import mathReducer from "./math";
import readingReducer from "./reading";
import { reducer as counterReducer } from "./counting";

export default combineReducers({
    math: mathReducer,
    reading: readingReducer,
    counting: counterReducer,
});
