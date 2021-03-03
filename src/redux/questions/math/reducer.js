import { NEW_MATH_QUESTION } from "./actions";
import QuestionMaker from "logic/math/simple";

const questionMaker = new QuestionMaker({ maxAnswer: 15 });

const reducer = (
    state = { question: questionMaker.question, answer: questionMaker.answer },
    { type, payload }
) => {
    switch (type) {
        case NEW_MATH_QUESTION:
            questionMaker.newQuestion();
            let { question, answer } = questionMaker;
            return { ...state, question, answer };
        default:
            return state;
    }
};

export default reducer;
