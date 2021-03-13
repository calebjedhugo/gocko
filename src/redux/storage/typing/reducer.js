import { PUSH_TYPING_HISTORY, RESET_TYPING_HISTORY } from "./actions";
import { typingHistory } from "storage/localStorage";

const readingReducer = (state = typingHistory.data, { type, payload }) => {
    switch (type) {
        case PUSH_TYPING_HISTORY:
            const withTime = { ...payload, time: new Date().getTime() };
            typingHistory.push(withTime);
            return [...state, withTime];
        case RESET_TYPING_HISTORY:
            typingHistory.reset();
            return [];
        default:
            return state;
    }
};

export default readingReducer;
