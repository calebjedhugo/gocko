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

    setMaxAnswer = (value) => {
        this.maxAnswer = value;
    };
}

export default QuestionMaker;
