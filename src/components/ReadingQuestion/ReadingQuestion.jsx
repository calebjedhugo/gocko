import React, { useState } from "react";
import QuestionForm from "components/organisms/QuestionForm";
import LabeledIcon from "components/common/LabeledIcon";
import { icons } from "logic/reading/questions";

const ReadingQuestion = ({
    data, // from connected
    question, // from connected
    answer, // from connected
    iconOnly, // from connected
    push, // from connected
    newQuestion, // from connected
}) => {
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = ({ target: { value } }) => {
        if (value.length <= answer.length) setUserAnswer(value);
    };

    const displayQuestion = iconOnly ? (
        icons[question]
    ) : (
        <LabeledIcon text={question} icon={icons[question]} />
    );

    return (
        <QuestionForm
            headerText="Reading Questions"
            inputType="text"
            metaData={{ iconOnly }}
            {...{
                data,
                push,
                question,
                displayQuestion,
                answer,
                userAnswer,
                setUserAnswer,
                newQuestion,
                handleChange,
            }}
        />
    );
};

export default ReadingQuestion;
