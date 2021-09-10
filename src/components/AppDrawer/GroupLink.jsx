/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  // drawerToolbar: {
  //   width: '100%',
  //   display: 'flex',
  //   position: 'relative',
  //   boxSizing: 'border-box',
  //   textAlign: 'left',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  //   padding: '8px 16px',
  //   textDecoration: 'none',

  //   ...theme.mixins.toolbar,
  // },

  accordionList: {
    background: 'rgba(255,255,255,0)',
  },

  SubMenu: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconBox: {
    margin: '0 26px 0 7px',
  },
}));

const GroupLink = ({ children, icon, title, expanded, id, handleChange }) => {
  const classes = useStyles();
  return (
    <Accordion
      className={classes.accordionList}
      expanded={expanded === id}
      onChange={handleChange(id)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className={classes.menuButton}
      >
        <div className={classes.iconBox}>{icon}</div>
        <Typography>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.SubMenu}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupLink;
