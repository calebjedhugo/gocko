import { NEW_READING_QUESTION, SET_SYMBOL_ONLY } from "./actions";
import QuestionMaker from "logic/reading/QuestionMaker";

const questionMaker = new QuestionMaker();

const reducer = (
    state = {
        question: questionMaker.question,
        answer: questionMaker.answer,
        iconOnly: true,
    },
    { type, payload }
) => {
    switch (type) {
        case NEW_READING_QUESTION:
            // With these symbol questions, the question is the answer.
            // The word is used to retrieve the symbol, and that is displayed instead.
            questionMaker.newQuestion();
            let { question } = questionMaker;
            return { ...state, question };
        case SET_SYMBOL_ONLY:
            const { value } = payload || {};
            return { ...state, iconOnly: value };
        default:
            return state;
    }
};

export default reducer;
