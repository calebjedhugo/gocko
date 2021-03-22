import { ADVANCE_TYPING_STRING, SET_TYPING_CHARS } from "./actions";
import StringMaker from "logic/typing/StringMaker";

// TODO: initialize from local storage.
const stringMaker = new StringMaker({ typingChars: "fjdk" });

const reducer = (state = stringMaker.state, { type, payload }) => {
    switch (type) {
        case ADVANCE_TYPING_STRING:
            stringMaker.advance();
            return { ...state, ...stringMaker.state };
        case SET_TYPING_CHARS:
            const { value } = payload || {};
            stringMaker.currentChars = value;
            return { ...state, ...stringMaker.state };
        default:
            return state;
    }
};

export default reducer;
