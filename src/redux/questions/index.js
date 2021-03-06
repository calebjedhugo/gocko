import { combineReducers } from "redux";

import mathReducer from "./math";
import readingReducer from "./reading";

export default combineReducers({ math: mathReducer, reading: readingReducer });
