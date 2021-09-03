import React, { useState, SyntheticEvent } from 'react';
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
  ListItemText,
  ListItem,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { autoUpdater } from 'electron-updater';
import { AuthRoutes } from '../../routes/paths';
import AppBarCustom from '../Header/AppBarCustom/AppBarCustom';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logout: {
      margin: '1.5em 2.5em',
    },
    link: {
      color: theme.palette.primary.main,
      width: '100%',
      display: 'block',
      margin: 0,
    },
    logo: {
      maxWidth: 160,
    },
  })
);

const AppDrawer = () => {
  const [open, setOpen] = useState(true);

  const classes = useStyles();
  const theme = useTheme();

  const history = useHistory();

  // eslint-disable-next-line prefer-const
  let { url } = useRouteMatch();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = (event: SyntheticEvent) => {
    event.preventDefault();
    history.push('/');
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  console.log('history', history);
  console.log('url', url);

  return (
    <div className={classes.root}>
      <AppBarCustom open={open} openDrawer={handleDrawerOpen} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {/* <Paper variant="outlined">
            <img
              src="../../../assets/imgs/logo.jpg"
              alt="logo"
              className={classes.logo}
            />
          </Paper> */}

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <Link className={classes.link} to={AuthRoutes.dashboard}>
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className={classes.link} to={AuthRoutes.utilities}>
              <ListItemText primary="Utilities" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className={classes.link} to={AuthRoutes.account}>
              <ListItemText primary="Account" />
            </Link>
          </ListItem>
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
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};

export default AppDrawer;
