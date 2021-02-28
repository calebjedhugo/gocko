import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const STextField = styled(TextField)`
    & input {
        font-size: 100px;
        max-width: 200px;
    }
`;

const LargeInput = forwardRef(({ ...rest }, ref) => (
    <STextField
        inputRef={ref}
        autoComplete="off"
        variant="outlined"
        {...rest}
    ></STextField>
));

export default LargeInput;
