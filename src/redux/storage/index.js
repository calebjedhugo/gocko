import { combineReducers } from "redux";

import mathReducer from "./math";

export default combineReducers({ math: mathReducer });
