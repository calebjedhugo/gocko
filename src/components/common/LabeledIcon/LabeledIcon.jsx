import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

// This is meant to be useed inside a Typography component.
const LabeledIcon = ({ text, icon }) => (
    <Box display="flex" alignItems="center">
        <Typography variant="inherit">{text}</Typography>
        {icon}
    </Box>
);

LabeledIcon.propTypes = { text: PropTypes.string, icon: PropTypes.node };

export default LabeledIcon;
