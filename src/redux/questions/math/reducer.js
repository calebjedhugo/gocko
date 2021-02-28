import { NEW_MATH_QUESTION } from "./actions";
import { randomNumberBetween } from "util/math";

class QuestionMaker {
    constructor() {
        this.newQuestion();
    }

    newQuestion = () => {
        this.numbers = [randomNumberBetween(0, 5), randomNumberBetween(0, 5)];
        this.question = `${this.numbers[0]} + ${this.numbers[1]}`;
        this.answer = this.numbers[0] + this.numbers[1];
    };
}

const questionMaker = new QuestionMaker();

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
