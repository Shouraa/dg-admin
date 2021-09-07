/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  ListItemIcon,
  Hidden,
} from '@material-ui/core';

import { AccountCircle, Settings, ExitToApp } from '@material-ui/icons';
import AvatarBadge from './AvatarBadge';
import img from '../../../../../assets/icon.png';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  menuIcon: {
    minWidth: '33px',
  },
  paddingRightZero: {
    paddingRight: 0,
  },
}));

const AppBarAvatar = (props) => {
  const classes = useStyles(props);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        display="flex"
        alignItems="center"
        className={classes.paddingRightZero}
      >
        <ListItemAvatar>
          <AvatarBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <Avatar alt="MR" src={img} />
          </AvatarBadge>
        </ListItemAvatar>
        <Hidden implementation="css" smDown>
          <ListItemText
            primary={
              <>
                <Typography variant="subtitle2">Mark Richman</Typography>
              </>
            }
          />
        </Hidden>
      </ListItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default AppBarAvatar;
