import { icons } from "./questions";
import { randomNumberBetween } from "util/math";

const words = Object.keys(icons);

class QuestionMaker {
    constructor() {
        this.newQuestion();
    }

    newQuestion = () => {
        const idx = randomNumberBetween(0, words.length - 1);
        this.answer = words[idx];
        this.question = words[idx];
    };
}

export default QuestionMaker;
