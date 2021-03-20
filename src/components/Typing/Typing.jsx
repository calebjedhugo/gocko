import React, { useEffect, useRef, useState } from "react";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import Motivator from "components/common/Motivator";

const InvisbileBox = styled(Box)`
    opacity: 0;
    position: fixed;
`;

const Typing = ({ pastChars, currentChar, futureChars, push, advance }) => {
    const [addPoint, setAddPoint] = useState(false);
    const [clearScore, setClearScore] = useState(false);
    const handleStroke = (e) => {
        if (e.target.value === currentChar) {
            setAddPoint(true);
            advance();
        } else {
            setClearScore(true);
        }
    };
    const inputRef = useRef();
    useEffect(() => {
        window.addEventListener("click", () => {
            inputRef.current?.click();
        });
        const localRef = inputRef;
        // returned function will be called on component unmount
        return () => {
            window.removeEventListener("click", () => {
                localRef.current?.click();
            });
        };
    }, []);
    const commonProps = { variant: "body2", display: "inline" };
    return (
        <>
            <InvisbileBox>
                <Input
                    autoFocus={true}
                    ref={inputRef}
                    onChange={handleStroke}
                    value={""}
                />
            </InvisbileBox>
            <Box display="inline">
                <Typography {...commonProps} color="textSecondary">
                    {pastChars}
                </Typography>
                <Typography {...commonProps} color="primary">
                    {currentChar}
                </Typography>
                <Typography {...commonProps}>{futureChars}</Typography>
            </Box>
            <Motivator
                addPoint={addPoint}
                setAddPoint={setAddPoint}
                clearScore={clearScore}
                setClearScore={setClearScore}
            />
        </>
    );
};
export default Typing;
