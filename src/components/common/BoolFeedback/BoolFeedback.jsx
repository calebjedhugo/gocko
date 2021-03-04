import React from "react";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const BoolFeedback = ({
    visible = false,
    success = "Correct!",
    fail = "Wrong Answer. :(",
    value,
}) => (
    <Grow in={visible}>
        <Paper>
            <Box color={value ? "green" : "red"} textAlign="center" padding={1}>
                <Typography variant="h2">{value ? success : fail}</Typography>
            </Box>
        </Paper>
    </Grow>
);

BoolFeedback.propTypes = {
    visible: PropTypes.bool,
    success: PropTypes.string,
    fail: PropTypes.string,
    value: PropTypes.bool,
};

export default BoolFeedback;
