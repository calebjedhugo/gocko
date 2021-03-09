import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Math from "@material-ui/icons/PlusOne";
import Reading from "@material-ui/icons/MenuBook";
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
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
