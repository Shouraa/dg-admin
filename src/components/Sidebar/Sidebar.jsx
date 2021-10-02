/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, Button, Hidden } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LayersIcon from '@material-ui/icons/Layers';
import { AuthRoutes } from '../../routes/paths';

import SidebarItem from './SidebarItem';

const drawerWidth = 240;

const structure = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    link: `${AuthRoutes.dashboard}`,
    icon: <DashboardIcon />,
  },
  {
    id: 'utilities',
    label: 'Utilities',
    link: `${AuthRoutes.utilities}`,
    icon: <AssessmentIcon />,
    children: [
      {
        label: 'Rankcharts',
        link: `${AuthRoutes.rankCharts}`,
        icon: <TimelineIcon />,
      },
      {
        label: 'Databases',
        link: `${AuthRoutes.databases}`,
        icon: <LayersIcon />,
      },
    ],
  },
  {
    id: 'account',
    label: 'Account',
    link: `${AuthRoutes.account}`,
    icon: <AccountBoxIcon />,
  },

  // { id: 4, type: 'divider' },
  // { id: 5, type: 'title', label: 'HELP' },
  // { id: 6, type: 'divider' },
];

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
  linkLabel: {
    padding: 0,
    color: `${theme.palette.text.secondary}CC`,
    transition: theme.transitions.create(['opacity', 'color']),
    fontSize: 16,
  },
  linkLabelHidden: {
    opacity: 0,
  },
  logout: {
    margin: '1.5em 2.5em',
  },
}));

const Sidebar = ({
  isOpen,
  onMobileClose,
  openMobile,
  openDrawer,
  location,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const { url } = useRouteMatch();

  // const [expanded, setExpanded] = useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  const handleLogout = (event) => {
    event.preventDefault();
    history.push('/');
  };

  const handleMouseOver = () => {
    openDrawer(true);
  };

  console.log(history);
  console.log('url', url);

  const drawer = (
    <>
      <div className={classes.drawerContainer}>
        {/* <img src={logo} alt="!" className={classes.logo} /> */}

        <List className={classes.sidebarList}>
          {structure.map((link) => (
            <SidebarItem
              key={link.id}
              location={location}
              isSidebarOpened={isOpen}
              {...link}
            />
          ))}
        </List>
        <Divider />
      </div>

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
          onMouseOver={handleMouseOver}
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

export default Sidebar;
