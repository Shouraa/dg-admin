import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import { initializePedalData } from '../../../actions/rankActions';
import TypeSelect from './RankChartsSections/TypeSelect';

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
    backgroundColor: '#E6EED6',
    borderRadius: 5,
  },
}));

const RankCharts = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const productRanks = useSelector((state) => state.ranks);
  // console.log(productRanks);
  useEffect(() => {
    dispatch(initializePedalData());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <h1>RankCharts</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box className={classes.box}>CHARTS</Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.box}>
            <TypeSelect data={productRanks} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default RankCharts;
