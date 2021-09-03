/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';

import clsx from 'clsx';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

import Notification from '../HeaderSections/Notification';
import Profile from '../HeaderSections/Profile';
import Messages from '../HeaderSections/Messages';
import { useStyles } from '../HeaderStyles/HeaderStyles';

function AppBarCustom({ open, openDrawer }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DarkGlass Admin Panel
          </Typography>
          <Hidden smDown>
            <Box style={{ display: 'flex' }}>
              <Notification />
              <Messages />
              <Profile />
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarCustom;
