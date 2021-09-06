import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import AppDrawer from '../components/AppDrawer/AppDrawer';
import AppBarCustom from '../components/Header/AppBarCustom/AppBarCustom';
import AppContent from '../components/AppContent/AppContent';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const DefaultLayout = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarCustom />
      <AppDrawer />
      <AppContent />
    </div>
  );
};

export default DefaultLayout;
