import React, { useState, useRef } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const randomNumberBetween = (num1, num2) => {
    return (
        Math.floor(Math.random() * Math.max(num1, num2)) + Math.min(num1, num2)
    );
};

const newNumbers = () => [randomNumberBetween(0, 5), randomNumberBetween(0, 5)];

const Question = ({ data, push, reset }) => {
    const [numbers, setNumbers] = useState(newNumbers());
    const [attempted, setAttempted] = useState(false);
    const [answerFeedback, setAnswerFeedback] = useState("Correct!");
    const [userAnswer, setUserAnswer] = useState("");
    const answer = numbers[0] + numbers[1];
    const newQuestion = () => {
        setAttempted(false);
        setNumbers(newNumbers());
        setUserAnswer("");
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
                        <Typography variant="h1">
                            {numbers[0]} + {numbers[1]}
                        </Typography>
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
                                    question: `${numbers[0]} + ${numbers[1]}`,
                                    answer: value,
                                    correct: true,
                                };
                                setAttempted(true);
                                if (Number(value) === Number(answer)) {
                                    push({
                                        ...historyObj,
                                        correct: true,
                                    });
                                    setAnswerFeedback("Correct!");
                                    newQuestionButton.current.focus();
                                } else if (!!value) {
                                    push({
                                        ...historyObj,
                                        correct: false,
                                    });
                                    setAnswerFeedback("Wrong answer. :(");
                                    questionInput.current.select();
                                }
                            }}
                        >
                            <TextField
                                type="number"
                                autoFocus={true}
                                inputRef={questionInput}
                                InputProps={{
                                    style: {
                                        fontSize: "100px",
                                        maxWidth: "200px",
                                    },
                                }}
                                name="answer"
                                autoComplete="off"
                                variant="outlined"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                            ></TextField>
                        </form>
                        <Button ref={newQuestionButton} onClick={newQuestion}>
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

const MathQuestion = ({ data, push, reset }) => {
    return (
        <>
            <h2>Math Questions</h2>
            <Question {...{ data, push, reset }} />
        </>
    );
};

export default MathQuestion;