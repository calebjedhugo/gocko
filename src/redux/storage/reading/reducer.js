import { PUSH_READING_HISTORY, RESET_READING_HISTORY } from "./actions";
import { readingHistory } from "storage/localStorage";

const readingReducer = (state = readingHistory.data, { type, payload }) => {
    switch (type) {
        case PUSH_READING_HISTORY:
            const withTime = { ...payload, time: new Date().getTime() };
            readingHistory.push(withTime);
            return [...state, withTime];
        case RESET_READING_HISTORY:
            readingHistory.reset();
            return [];
        default:
            return state;
    }
};

export default readingReducer;
