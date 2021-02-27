import { PUSH_MATH_HISTORY, RESET_MATH_HISTORY } from "./actions";
import { mathHistory } from "storage/localStorage";

const mathReducer = (state = mathHistory.data, { type, payload }) => {
    switch (type) {
        case PUSH_MATH_HISTORY:
            const withTime = { ...payload, time: new Date().getTime() };
            mathHistory.push(withTime);
            return [...state, withTime];
        case RESET_MATH_HISTORY:
            mathHistory.reset();
            return [];
        default:
            return state;
    }
};

export default mathReducer;
