/** @format */

import React, { useState, useRef } from "react";
import { mathHistory } from "../storage/localStorage";

const randomNumberBetween = (num1, num2) => {
    return (
        Math.floor(Math.random() * Math.max(num1, num2)) + Math.min(num1, num2)
    );
};

const questionStyle = {
    display: "flex",
    fontSize: 200,
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
};

const feedbackStyle = {
    textAlign: "center",
    fontSize: "100px",
};

const answerInputStyle = {
    fontSize: "100px",
    maxWidth: "200px",
};

const Question = () => {
    const [firstNumber, setFirstNumber] = useState(randomNumberBetween(0, 4));
    const [secondNumber, setSecondNumber] = useState(randomNumberBetween(0, 4));
    const [correct, setCorrect] = useState();
    const answer = firstNumber + secondNumber;
    const newQuestion = () => {
        setFirstNumber(randomNumberBetween(0, 5));
        setSecondNumber(randomNumberBetween(0, 5));
        setCorrect("");
        questionInput.current.value = "";
        questionInput.current.focus();
    };
    const newQuestionButton = useRef();
    const questionInput = useRef();
    return (
        <div>
            <div style={questionStyle}>
                {firstNumber} + {secondNumber}
            </div>
            {correct && (
                <div
                    style={{
                        ...feedbackStyle,
                        color: correct === "Correct!" ? "green" : "red",
                    }}
                >
                    {correct}
                </div>
            )}
            <div style={{ textAlign: "center" }}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const { value } = e.target.answer;
                        const historyObj = {
                            question: `${firstNumber} + ${secondNumber}`,
                            answer: value,
                            correct: true,
                        };
                        if (Number(value) === Number(answer)) {
                            mathHistory.push({ ...historyObj, correct: true });
                            setCorrect("Correct!");
                            newQuestionButton.current.focus();
                        } else if (!!value) {
                            mathHistory.push({ ...historyObj, correct: false });
                            setCorrect("Wrong answer. :(");
                            console.log(value);
                            questionInput.current.select();
                        }
                    }}
                >
                    <input
                        ref={questionInput}
                        type="number"
                        autoFocus={true}
                        style={answerInputStyle}
                        name="answer"
                        autoComplete="off"
                    ></input>
                </form>
                <button ref={newQuestionButton} onClick={newQuestion}>
                    New Question
                </button>
            </div>
            <div
                style={{ float: "right", marginRight: "32px" }}
            >{`Correct answers: ${
                mathHistory.data.filter((elem) => elem.correct).length
            }`}</div>
        </div>
    );
};

const MathQuestion = () => {
    return (
        <>
            <h2>Math Questions</h2>
            <Question />
        </>
    );
};

export default MathQuestion;
