import React from "react";
// import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Typing = ({ pastChars, currentChar, futureChars }) => (
    <Typography>
        {pastChars}
        {currentChar}
        {futureChars}
    </Typography>
);
export default Typing;
