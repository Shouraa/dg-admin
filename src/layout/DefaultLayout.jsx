import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import AppDrawer from '../components/AppDrawer/AppDrawer';
import AppBarCustom from '../components/Header/AppBarCustom/AppBarCustom';
import AppContent from '../components/AppContent/AppContent';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    },
    content: {
      flexGrow: 1,
      flexDirection: 'column',
      height: '100%',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: ({ isDrawerOpen }) => (isDrawerOpen ? 240 : 64),
      },
      overflow: 'auto',
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

const DefaultLayout = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const classes = useStyles({ isDrawerOpen });

  const handleDrawerOpen = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarCustom
        toggleDrawer={handleDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        onMobileNavOpen={() => setMobileNavOpen(true)}
      />
      <AppDrawer
        isOpen={isDrawerOpen}
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: !isDrawerOpen,
        })}
      >
        <AppContent />
      </main>
    </div>
  );
};

export default DefaultLayout;
