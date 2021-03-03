import React, { useState } from "react";
import LargeInput from "components/common/LargeInput";
import Typography from "@material-ui/core/Typography";

const Reading = () => {
    const [value, setValue] = useState("");
    const [correct, setCorrect] = useState(false);
    const word = "A";
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.answer.value === word) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    };
    return (
        <>
            <Typography>{word}</Typography>
            <form onSubmit={handleSubmit}>
                <LargeInput
                    value={value}
                    name="answer"
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            {correct && <Typography>Correct!</Typography>}
        </>
    );
};

export default Reading;
