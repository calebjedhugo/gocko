import React from 'react';
import StatsTable from './StatsTable';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from 'components/common/Header';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Stats = ({
  storage,
  reset,
  setMathMaxAnswer,
  mathMaxAnswer,
  setCountingMaxAnswer,
  countingMaxAnswer,
  readingIconOnly,
  setReadingIconOnly,
}) => (
  <Box display="flex" flexDirection="column" justifyContent="center">
    <Header>Results</Header>
    <Grid container spacing={2} justify="space-around">
      <Grid item>
        <StatsTable
          displayName={'Math'}
          storage={storage.math}
          reset={reset.math}
          {...{ setMathMaxAnswer, mathMaxAnswer }}
        >
          <TextField
            value={mathMaxAnswer}
            onChange={setMathMaxAnswer}
            variant="outlined"
            label="Max Answer"
          />
        </StatsTable>
      </Grid>
      <Grid item>
        <StatsTable
          displayName={'Counting'}
          storage={storage.counting}
          reset={reset.counting}
          {...{ setCountingMaxAnswer, countingMaxAnswer }}
        >
          <TextField
            value={countingMaxAnswer}
            onChange={setCountingMaxAnswer}
            variant="outlined"
            label="Max Answer"
          />
        </StatsTable>
      </Grid>
      <Grid item>
        <StatsTable
          displayName={'Reading'}
          storage={storage.reading}
          reset={reset.reading}
          {...{ setMathMaxAnswer, mathMaxAnswer }}
        >
          <FormControlLabel
            control={
              <Switch checked={readingIconOnly} label="iconOnly" onChange={setReadingIconOnly} />
            }
            label="Icon Only"
          ></FormControlLabel>
        </StatsTable>
      </Grid>
    </Grid>
  </Box>
);
export default Stats;
