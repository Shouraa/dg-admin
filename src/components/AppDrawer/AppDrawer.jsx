/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, Button, Hidden, Box } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LayersIcon from '@material-ui/icons/Layers';
import { AuthRoutes } from '../../routes/paths';

import GroupLink from './GroupLink';
import SubLink from './SubLink';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor: theme.palette.primary,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.primary,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary,
  },
  drawerContainer: {
    height: '100%',
    marginTop: '64px',
  },
  logout: {
    margin: '1.5em 2.5em',
  },
}));

const AppDrawer = ({ isOpen, onMobileClose, openMobile, openDrawer }) => {
  const classes = useStyles();
  const history = useHistory();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    history.push('/');
  };

  const handleMouseOver = () => {
    openDrawer(true);
  };

  const drawer = (
    <>
      <div className={classes.drawerContainer} onMouseOver={handleMouseOver}>
        {/* <img src={logo} alt="!" className={classes.logo} /> */}

        <List>
          <SubLink
            link={AuthRoutes.dashboard}
            icon={<DashboardIcon />}
            title="Dashboard"
          />
          <GroupLink
            icon={<AssessmentIcon />}
            title="Utilities"
            expanded={expanded}
            id="utilities"
            handleChange={(panel) => handleChange(panel)}
          >
            <SubLink
              link={AuthRoutes.rankCharts}
              icon={<TimelineIcon />}
              title="Rank Charts"
            />
            <SubLink
              link={AuthRoutes.databases}
              icon={<LayersIcon />}
              title="Databases"
            />
          </GroupLink>
          <SubLink
            link={AuthRoutes.account}
            icon={<AccountBoxIcon />}
            title="Account"
          />
        </List>
      </div>
      <Divider />

      <Divider />
      <Button
        variant="contained"
        color="primary"
        className={classes.logout}
        onClick={handleLogout}
      >
        log out
      </Button>
    </>
  );

  return (
    <>
      <Hidden smDown>
        <Drawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          })}
          variant="permanent"
          classes={{
            paper: clsx({
              [classes.drawerOpen]: isOpen,
              [classes.drawerClose]: !isOpen,
            }),
          }}
          onClose={onMobileClose}
          open={openMobile}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          })}
          variant="temporary"
          classes={{
            paper: clsx({
              [classes.drawerOpen]: isOpen,
              [classes.drawerClose]: !isOpen,
            }),
          }}
          onClose={onMobileClose}
          open={openMobile}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default AppDrawer;
