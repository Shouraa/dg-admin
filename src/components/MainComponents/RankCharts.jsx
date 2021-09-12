import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import { initializePedalData } from '../../actions/rankActions';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '16px 32px',
    flexGrow: 1,
  },
  box: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'gray',
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
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Box className={classes.box}>CHARTS</Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.box}>Item</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default RankCharts;
