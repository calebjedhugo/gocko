import { NEW_MATH_QUESTION, SET_MAX_ANSWER } from "./actions";
import QuestionMaker from "logic/math/simple";

const maxAnswer = 10;
const questionMaker = new QuestionMaker({ maxAnswer });

const reducer = (
    state = {
        question: questionMaker.question,
        answer: questionMaker.answer,
        maxAnswer,
    },
    { type, payload }
) => {
    switch (type) {
        case NEW_MATH_QUESTION:
            questionMaker.newQuestion();
            let { question, answer } = questionMaker;
            return { ...state, question, answer };
        case SET_MAX_ANSWER:
            const { value } = payload || {};
            questionMaker.setMaxAnswer(value);
            return { ...state, maxAnswer: value };
        default:
            return state;
    }
};

export default reducer;
