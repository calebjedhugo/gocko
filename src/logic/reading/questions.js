import React from "react";
import Left from "@material-ui/icons/ArrowBack";
import Right from "@material-ui/icons/ArrowForward";
import Down from "@material-ui/icons/ArrowDownward";
import Up from "@material-ui/icons/ArrowUpward";
import Boat from "@material-ui/icons/DirectionsBoat";
import Door from "@material-ui/icons/MeetingRoom";

const words = ["left", "right", "down", "up", "boat", "door"];

const icons = {
    left: <Left fontSize="inherit" />,
    right: <Right fontSize="inherit" />,
    down: <Down fontSize="inherit" />,
    up: <Up fontSize="inherit" />,
    boat: <Boat fontSize="inherit" />,
    door: <Door fontSize="inherit" />,
};

export { words, icons };
