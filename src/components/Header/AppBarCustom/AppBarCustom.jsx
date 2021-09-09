/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';

import clsx from 'clsx';

import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  makeStyles,
  createStyles,
} from '@material-ui/core/';

import MenuIcon from '@material-ui/icons/Menu';

import Notification from '../HeaderSections/Notifications';
import Messages from '../HeaderSections/Messages';
import AppBarAvatar from '../HeaderSections/AppBarAvatar/AppBarAvatar';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolBar: {
      paddingLeft: theme.spacing(0.5),
    },
    menuIcon: {
      marginRight: theme.spacing(2),
      color: 'white',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    grow: {
      flexGrow: 1,
    },
  })
);

function AppBarCustom({ isDrawerOpen, toggleDrawer, onMobileNavOpen }) {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawerOpen,
        [classes.appBarShiftClose]: !isDrawerOpen,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <IconButton
            onClick={() => toggleDrawer()}
            className={classes.menuIcon}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Notification />
            <Messages />
            <AppBarAvatar />
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarCustom;
