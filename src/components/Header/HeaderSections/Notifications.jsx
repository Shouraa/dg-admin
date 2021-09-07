import React, { useState } from 'react';

import {
  IconButton,
  List,
  Box,
  Menu,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
} from '@material-ui/core';

import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from '../HeaderStyles/HeaderStyles';

const menuItems = [{ label: 'somebody', desc: 'sent you a message' }];

const Notification = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        aria-controls="Notification"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="notification"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.navlist}>
          {menuItems.map((item) => (
            <ListItem key={item.label} onClick={handleClose}>
              <ListItemIcon>
                <Avatar className={classes.listAvatar}>
                  {item.label[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={item.label} secondary={item.desc} />
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
};

export default Notification;
