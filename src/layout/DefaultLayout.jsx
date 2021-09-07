import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import AppDrawer from '../components/AppDrawer/AppDrawer';
import AppBarCustom from '../components/Header/AppBarCustom/AppBarCustom';
import AppContent from '../components/AppContent/AppContent';
import NavigationProvider from '../contexts/NavigationContext';

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
      <NavigationProvider>
        <AppBarCustom />
        <AppDrawer />
        <AppContent />
      </NavigationProvider>
    </div>
  );
};

export default DefaultLayout;
