import React, { useState } from "react";
import QuestionForm from "components/organisms/QuestionForm";

const MathQuestion = ({
    data, // from connected
    question, // from connected
    answer, // from connected
    maxAnswer, // from connected
    push, // from connected
    newQuestion, // from connected
}) => {
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = ({ target: { value } }) => {
        if (Math.abs(Number(value)) <= maxAnswer) setUserAnswer(value);
    };

    return (
        <QuestionForm
            headerText="Math Questions"
            inputType="number"
            {...{
                data,
                push,
                question,
                answer,
                userAnswer,
                setUserAnswer,
                newQuestion,
                handleChange,
            }}
        />
    );
};

export default MathQuestion;
