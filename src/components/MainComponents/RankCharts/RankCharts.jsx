import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import clsx from 'clsx';
import { initializePedalData } from '../../../actions/rankActions';
import TypeSelect from './RankChartsSections/TypeSelect';
import RanksLineChart from './RankChartsSections/RanksLineChart';

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
    backgroundColor: theme.palette.primary.light,
    borderRadius: 5,
  },
}));

const RankCharts = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const productRanks = useSelector((state) => state.ranks);
  useEffect(() => {
    dispatch(initializePedalData());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <h1>RankCharts</h1>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Box className={classes.box}>
            <RanksLineChart data={productRanks.selectChartData} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.box}>
            <TypeSelect data={productRanks} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default RankCharts;
