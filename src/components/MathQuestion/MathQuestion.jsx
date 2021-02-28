import React, { useState, useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import LargeInput from "components/common/LargeInput";

const Question = ({ data, push, question, answer, newQuestion }) => {
    const [attempted, setAttempted] = useState(false);
    const [answerFeedback, setAnswerFeedback] = useState("Correct!");
    const [userAnswer, setUserAnswer] = useState("");
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
        <Box
            px={4}
            // style={{
            //     backgroundImage:
            //         "linear-gradient(90deg,transparent, #87ceeb, transparent)",
            // }}
        >
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <Typography variant="h1">{question}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Grow in={attempted}>
                        <Paper>
                            <Box
                                color={
                                    answerFeedback === "Correct!"
                                        ? "green"
                                        : "red"
                                }
                                textAlign="center"
                                padding={1}
                            >
                                <Typography variant="h2">
                                    {answerFeedback}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid item>
                    <Box style={{ textAlign: "center" }}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const { value } = e.target.answer;
                                const historyObj = {
                                    question,
                                    answer: value,
                                    correct: true,
                                };
                                if (value) setAttempted(true);
                                if (Number(value) === Number(answer)) {
                                    push({
                                        ...historyObj,
                                        correct: true,
                                    });
                                    setAnswerFeedback("Correct!");
                                    newQuestionButton.current.focus();
                                } else if (!!value && answerChanged) {
                                    setAnswerChanged(false);
                                    push({
                                        ...historyObj,
                                        correct: false,
                                    });
                                    setAnswerFeedback("Wrong answer. :(");
                                    questionInput.current.select();
                                }
                            }}
                        >
                            <LargeInput
                                autoFocus={true}
                                ref={questionInput}
                                name="answer"
                                value={userAnswer}
                                type="number"
                                onChange={(e) => setUserAnswer(e.target.value)}
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
    );
};

const MathQuestion = ({ data, push, question, answer, newQuestion }) => {
    return (
        <>
            <h2>Math Questions</h2>
            <Question {...{ data, push, question, answer, newQuestion }} />
        </>
    );
};

export default MathQuestion;
