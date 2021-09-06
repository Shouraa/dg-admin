/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';

import clsx from 'clsx';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from '@material-ui/core/';

import Notification from '../HeaderSections/Notification';
import Profile from '../HeaderSections/Profile';
import Messages from '../HeaderSections/Messages';
import { useStyles } from '../HeaderStyles/HeaderStyles';

function AppBarCustom({ open, openDrawer }) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
        [classes.appBarShiftClose]: !open,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden smDown>
          <Notification />
          <Messages />
          <Profile />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarCustom;
