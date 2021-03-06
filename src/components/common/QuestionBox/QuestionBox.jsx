import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const QuestionBox = ({ children }) => (
    <Box display="flex" justifyContent="center">
        <Typography variant="h1">{children}</Typography>
    </Box>
);

export default QuestionBox;
