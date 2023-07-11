import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from 'styled-components';
import Typography from '@material-ui/core/Typography';

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
  const [bestStreak, setBestStreak] = useState(0);
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    if (addPoint) {
      setScore(Math.min(score + 1, maxScore));
      clearInterval(penaltyInterval);
      penaltyInterval = setInterval(() => {
        setScore((score) => Math.max(score - 1, 0));
      }, penaltyTimout);
      setAddPoint(false);
      if (score === maxScore) {
        setStreak(streak + 1);
        setBestStreak(Math.max(bestStreak, streak + 1));
      }
    }
  }, [addPoint, bestStreak, maxScore, penaltyTimout, score, setAddPoint, streak]);

  useEffect(() => {
    if (clearScore) {
      setClearScore(false);
      setScore(0);
      setStreak(0);
    }
  }, [clearScore, setClearScore]);
  return (
    <Box position="fixed" bottom={10} right={10} width={100} zIndex={-1}>
      <Typography noWrap>
        {streak} / {bestStreak}
      </Typography>
      <Paper elevation={5}>
        <SBox bgcolor="secondary.main" height={`${Math.ceil((score / maxScore) * 80)}vh`} />
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
