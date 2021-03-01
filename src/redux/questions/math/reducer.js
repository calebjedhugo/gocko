import { NEW_MATH_QUESTION } from "./actions";
import { randomNumberBetween } from "util/math";

class QuestionMaker {
    constructor({ maxAnswer }) {
        this.numbers = [];
        this.maxAnswer = maxAnswer;
        this.newQuestion();
    }

    newQuestion = () => {
        this.numbers[0] = randomNumberBetween(0, this.maxAnswer);
        this.numbers[1] = randomNumberBetween(
            0,
            this.maxAnswer - this.numbers[0]
        );
        this.question = `${this.numbers[0]} + ${this.numbers[1]}`;
        this.answer = this.numbers[0] + this.numbers[1];
    };
}

const questionMaker = new QuestionMaker({ maxAnswer: 10 });

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
