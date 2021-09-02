import React, { useState } from 'react';

import {
  Button,
  MenuItem,
  Box,
  Menu,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import img from '../../../../assets/icon.png';
import { useStyles } from '../HeaderStyles/HeaderStyles';

const menuItems = [
  { label: 'setting', icon: <SettingsIcon /> },
  { label: 'Logout', icon: <ExitToAppIcon /> },
];

const Profile = () => {
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
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Avatar src={img} className={classes.navAvatar} />}
      >
        {/* <Badge BadgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge> */}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.label} component={ListItem} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Profile;
