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

import MessageIcon from '@material-ui/icons/Message';
import { useStyles } from '../HeaderStyles/HeaderStyles';

const menuItems = [{ label: 'somebody', desc: 'You suck ...' }];

const Messages = () => {
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
        aria-controls="messages"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <MessageIcon />
        </Badge>
      </IconButton>
      <Menu
        id="messages"
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

export default Messages;
