import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Math from "@material-ui/icons/PlusOne";
import Reading from "@material-ui/icons/MenuBook";
import Typing from "@material-ui/icons/Keyboard";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    onClick={() => {
                        history.push("/");
                    }}
                >
                    <Home />
                </IconButton>
                <IconButton
                    onClick={() => {
                        history.push("/Binjundan");
                    }}
                >
                    <Reading />
                </IconButton>
                <IconButton
                    onClick={() => {
                        history.push("/Quin");
                    }}
                >
                    <Math />
                </IconButton>
                <IconButton
                    onClick={() => {
                        history.push("/Typing");
                    }}
                >
                    <Typing />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
