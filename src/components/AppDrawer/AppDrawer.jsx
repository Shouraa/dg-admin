import React, { useState, useEffect } from 'react';
import { useHistory, Link, useRouteMatch } from 'react-router-dom';

import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import {
  Drawer,
  List,
  Divider,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LayersIcon from '@material-ui/icons/Layers';
import { useLayout } from '../../contexts/LayoutContext';
import { AuthRoutes } from '../../routes/paths';

import GroupLink from './GroupLink';
import SubLink from './SubLink';

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerToolbar: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '8px 10px',
    textDecoration: 'none',

    ...theme.mixins.toolbar,
  },

  root: {
    display: 'flex',
  },

  menuButton: {
    marginRight: theme.spacing(2.5),
  },

  title: {
    flexGrow: 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    background: theme.palette.glass.main,
    backdropFilter: 'blur(8px)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  logout: {
    margin: '1.5em 2.5em',
  },
}));

const AppDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const { open, toggleDrawer } = useLayout();
  const [drawerPermanent, setDrawerPermanent] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function drawerTypeChange() {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && drawerPermanent) {
      setDrawerPermanent(false);
    } else if (!isSmallScreen && !drawerPermanent) {
      setDrawerPermanent(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', drawerTypeChange);
    drawerTypeChange();
    return () => {
      window.removeEventListener('resize', drawerTypeChange);
    };
  });

  const handleLogout = (event) => {
    event.preventDefault();
    history.push('/');
  };

  // eslint-disable-next-line prefer-const
  let { url } = useRouteMatch();

  // const handleDrawerClose = () => {
  //   toggleDrawer(false);
  // };
  // const handleLogout = (event: SyntheticEvent) => {
  //   event.preventDefault();
  //   history.push('/');
  // };

  // const handleDrawerOpen = () => {
  //   toggleDrawer(true);
  // };

  console.log('history', history);
  console.log('url', url);

  return (
    <Drawer
      className={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      variant="permanent"
      anchor="left"
      open={open}
    >
      <div className={classes.drawerToolbar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Site Title
        </Typography>
      </div>
      <Divider />

      <List>
        <div>
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
        </div>
      </List>
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
    </Drawer>
  );
};

export default AppDrawer;
