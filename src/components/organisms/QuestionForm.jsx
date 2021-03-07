import React, { useState, useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LargeInput from "components/common/LargeInput";
import Header from "components/common/Header";
import BoolFeedback from "components/common/BoolFeedback";
import QuestionBox from "components/common/QuestionBox";

const QuestionForm = ({
    data,
    push,
    question,
    displayQuestion,
    answer,
    userAnswer,
    setUserAnswer,
    newQuestion,
    headerText,
    handleChange,
    inputType,
    metaData,
}) => {
    const [attempted, setAttempted] = useState(false);
    const [correct, setCorrect] = useState(true);
    const [answerChanged, setAnswerChanged] = useState(false);
    useEffect(() => setAnswerChanged(true), [userAnswer]);
    const handleNewQuestion = () => {
        setAttempted(false);
        setAnswerChanged(false);
        setUserAnswer("");
        newQuestion();
        questionInput.current.focus();
    };
    const newQuestionButton = useRef();
    const questionInput = useRef();

    return (
        <>
            <Header>{headerText}</Header>
            <Box
                px={4}
                // style={{
                //     backgroundImage:
                //         "linear-gradient(90deg,transparent, #87ceeb, transparent)",
                // }}
            >
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <QuestionBox>{displayQuestion || question}</QuestionBox>
                    </Grid>
                    <Grid item>
                        <BoolFeedback visible={attempted} value={correct} />
                    </Grid>
                    <Grid item>
                        <Box textAlign="center">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const { value } = e.target.answer;
                                    const historyObj = {
                                        question,
                                        answer: value,
                                        correct: true,
                                        ...metaData,
                                    };
                                    if (value) setAttempted(true);
                                    if (value === answer.toString()) {
                                        push({
                                            ...historyObj,
                                            correct: true,
                                        });
                                        setCorrect(true);
                                        newQuestionButton.current.focus();
                                    } else if (!!value && answerChanged) {
                                        setAnswerChanged(false);
                                        push({
                                            ...historyObj,
                                            correct: false,
                                        });
                                        setCorrect(false);
                                        questionInput.current.select();
                                    }
                                }}
                            >
                                <LargeInput
                                    autoFocus={true}
                                    ref={questionInput}
                                    name="answer"
                                    value={userAnswer}
                                    type={inputType}
                                    onChange={handleChange}
                                />
                            </form>
                            <Button
                                ref={newQuestionButton}
                                onClick={handleNewQuestion}
                            >
                                New Question
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box position="fixed" bottom="30px" right="30px">
                    <Box style={{ float: "right", marginRight: "32px" }}>
                        {`Correct answers: ${
                            data?.filter((elem) => elem.correct).length || 0
                        }`}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default QuestionForm;
