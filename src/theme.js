import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
    palette: {
        text: { primary: "#1d1d23", secondary: "#444444" },
        primary: { main: "#0797c3" },
        error: { main: "#af0000" },
    },
    typography: {
        body2: { fontFamily: "monospace", fontSize: "3rem" },
    },
};

export default createMuiTheme(theme);
