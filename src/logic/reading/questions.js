import React from 'react';
import Left from '@material-ui/icons/ArrowBack';
import Right from '@material-ui/icons/ArrowForward';
import Down from '@material-ui/icons/ArrowDownward';
import Up from '@material-ui/icons/ArrowUpward';
import Boat from '@material-ui/icons/DirectionsBoat';
import Door from '@material-ui/icons/MeetingRoom';
import Bed from '@material-ui/icons/LocalHotel';
import { BugReport, Face, EventSeat, AirportShuttle, AttachMoney } from '@material-ui/icons';

const icons = {
  left: <Left fontSize="inherit" />,
  right: <Right fontSize="inherit" />,
  down: <Down fontSize="inherit" />,
  up: <Up fontSize="inherit" />,
  boat: <Boat fontSize="inherit" />,
  door: <Door fontSize="inherit" />,
  bed: <Bed fontSize="inherit" />,
  bug: <BugReport fontSize="inherit" />,
  face: <Face fontSize="inherit" />,
  chair: <EventSeat fontSize="inherit" />,
  car: <AirportShuttle fontSize="inherit" />,
  money: <AttachMoney fontSize="inherit" />,
};

export { icons };
