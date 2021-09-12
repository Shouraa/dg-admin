import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import { initializePedalData } from '../../actions/rankActions';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '16px 32px',
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const RankCharts = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const pedalRanks = useSelector((state) => state.ranks);
  console.log(pedalRanks);
  useEffect(() => {
    dispatch(initializePedalData());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Typography variant="h3">RankCharts</Typography>
      <Grid containter spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>KIREKHAR</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>KIREKHAR</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default RankCharts;
