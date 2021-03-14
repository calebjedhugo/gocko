import React, { useEffect, useRef } from "react";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const InvisbileBox = styled(Box)`
    opacity: 0;
    position: fixed;
`;

const Typing = ({ pastChars, currentChar, futureChars, push, advance }) => {
    const handleStroke = (e) => {
        if (e.target.value === currentChar) {
            advance();
        }
        console.log(e.target.value);
    };
    const inputRef = useRef();
    useEffect(() => {
        window.addEventListener("click", () => {
            inputRef.current?.click();
        });

        // returned function will be called on component unmount
        return () => {
            window.removeEventListener("click", () => {
                inputRef.current?.click();
            });
        };
    }, []);
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
                <Typography variant="h1" display="inline">
                    {pastChars}
                </Typography>
                <Typography variant="h1" display="inline" color="error">
                    {currentChar}
                </Typography>
                <Typography variant="h1" display="inline">
                    {futureChars}
                </Typography>
            </Box>
        </>
    );
};
export default Typing;
