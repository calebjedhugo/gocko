import { NEW_READING_QUESTION, SET_SYMBOL_ONLY } from "./actions";
import QuestionMaker from "logic/reading/QuestionMaker";

const symbolOnly = false;
const questionMaker = new QuestionMaker({ symbolOnly });

const reducer = (
    state = {
        question: questionMaker.question,
        answer: questionMaker.answer,
        symbolOnly,
    },
    { type, payload }
) => {
    switch (type) {
        case NEW_READING_QUESTION:
            questionMaker.newQuestion();
            let { question, answer } = questionMaker;
            return { ...state, question, answer };
        case SET_SYMBOL_ONLY:
            const { value } = payload || {};
            questionMaker.setSymbolOnly(value);
            return { ...state, symbolOnly: value };
        default:
            return state;
    }
};

export default reducer;
