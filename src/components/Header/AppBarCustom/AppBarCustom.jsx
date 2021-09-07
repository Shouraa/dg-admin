/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';

import clsx from 'clsx';

import { AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Notifications from '../HeaderSections/Notifications';
// import Profile from '../HeaderSections/Profile';
import AppBarAvatar from '../HeaderSections/AppBarAvatar/AppBarAvatar';
import Messages from '../HeaderSections/Messages';
import { useStyles } from '../HeaderStyles/HeaderStyles';

const AppBarCustom = ({ open, handleDrawerToggle }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: true,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Hidden smDown>
          <div className={classes.grow} />
          <div className={classes.appbarSection}>
            <Notifications />
            <Messages />
            <AppBarAvatar />
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
