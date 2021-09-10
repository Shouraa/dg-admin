/* eslint-disable react/prop-types */
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const SubLink = ({ icon, title, link }) => {
  return (
    <Link to={link}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText secondary={title} />
      </ListItem>
    </Link>
  );
};

export default SubLink;
