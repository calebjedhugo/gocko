import React from "react";
import LabeledIcon from "components/common/LabeledIcon";
import questions from "./questions";
import { randomNumberBetween } from "util/math";

class QuestionMaker {
    constructor({ symbolOnly }) {
        this.symbolOnly = symbolOnly;
        this.newQuestion();
    }

    newQuestion = () => {
        const idx = randomNumberBetween(0, questions.length);
        this.answer = questions[idx].word;
        this.question = this.symbolOnly ? (
            questions[idx].icon
        ) : (
            <LabeledIcon text={this.answer} icon={questions[idx].icon} />
        );
    };
}

export default QuestionMaker;
