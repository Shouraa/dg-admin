import React from 'react';
import useStyles from './styles';

import AppDrawer from '../components/AppDrawer/AppDrawer';
import AppBarCustom from '../components/Header/AppBarCustom/AppBarCustom';
import AppContent from '../components/AppContent/AppContent';

const DefaultLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppDrawer />
      <main className={classes.content}>
        <AppBarCustom />

        <div className={classes.appLayout}>
          <AppContent />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
