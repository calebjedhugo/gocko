import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import styles from "styled-components";

const SBox = styles(Box)`
    transition: height 1s;
`;

let penaltyInterval;

const Motivator = ({
    maxScore = 10,
    penaltyTimout = 5000,
    addPoint,
    setAddPoint,
    clearScore,
    setClearScore,
}) => {
    const [score, setScore] = useState(0);
    useEffect(() => {
        if (addPoint) {
            setScore(Math.min(score + 1, maxScore));
            clearInterval(penaltyInterval);
            penaltyInterval = setInterval(() => {
                setScore((score) => Math.max(score - 1, 0));
            }, penaltyTimout);
            setAddPoint(false);
        }
    }, [addPoint, maxScore, penaltyTimout, score, setAddPoint]);

    useEffect(() => {
        if (clearScore) {
            setClearScore(false);
            setScore(0);
        }
    }, [clearScore, setClearScore]);
    return (
        <Box position="fixed" bottom={10} right={10} width={20}>
            <Paper elevation={5}>
                <SBox
                    bgcolor="primary.main"
                    height={`${Math.ceil((score / maxScore) * 90)}vh`}
                />
            </Paper>
        </Box>
    );
};

Motivator.propTypes = {
    /** The score required to have the Motivator at its largest size. */
    maxScore: PropTypes.number,
    /** The number of ms is takes for one point to be removed. */
    pentaltyInterval: PropTypes.number,
    /** Pass in true if a point should be added. */
    addPoint: PropTypes.bool.isRequired,
    /** Pass in the function for setting addPoint. It is set to false once the interval is reset */
    setAddPoint: PropTypes.func.isRequired,
};

export default Motivator;
