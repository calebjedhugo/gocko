import React, { useState } from "react";
import QuestionForm from "components/organisms/QuestionForm";

const ReadingQuestion = ({
    data, // from connected
    question, // from connected
    answer, // from connected
    maxAnswer, // from connected
    push, // from connected
    newQuestion, // from connected
}) => {
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = ({ target: { value } }) => {
        if (value.length <= answer.length) setUserAnswer(value);
    };
    return (
        <QuestionForm
            headerText="Reading Questions"
            inputType="text"
            {...{
                data,
                push,
                question,
                answer,
                userAnswer,
                setUserAnswer,
                maxAnswer,
                newQuestion,
                handleChange,
            }}
        />
    );
};

export default ReadingQuestion;
