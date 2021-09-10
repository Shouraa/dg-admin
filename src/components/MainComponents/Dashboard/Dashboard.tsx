import React from 'react';
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core';

import clsx from 'clsx';
import LogTable from './DashboardSections/LogTable';
import ProgressBarChart from './DashboardSections/ProgressBarChart';
import DatabasesPieChart from './DashboardSections/DatabasesPieChart';

const useStyles = makeStyles(() => ({
  paperPadding: {
    padding: '10px 5px 5px 10px',
  },
  mt: {
    marginTop: 13,
  },
  titlePaper: {
    marginBottom: '16px',
  },

  Chart: {
    // height: "150px"
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.paperPadding}>
      <h1>Dashboard</h1>

      <Grid container spacing={2}>
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paperPadding, classes.mt)}
              variant="outlined"
            >
              {' '}
              <Typography className={classes.titlePaper} variant="h5">
                Logs
              </Typography>
              <LogTable />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paperPadding, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Progress
              </Typography>
              <ProgressBarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paperPadding} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Databases
            </Typography>
            <DatabasesPieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
