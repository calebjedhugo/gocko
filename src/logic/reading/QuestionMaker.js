import { words } from "./questions";
import { randomNumberBetween } from "util/math";

class QuestionMaker {
    constructor() {
        this.newQuestion();
    }

    newQuestion = () => {
        const idx = randomNumberBetween(0, words.length);
        this.answer = words[idx];
        this.question = words[idx];
    };
}

export default QuestionMaker;
