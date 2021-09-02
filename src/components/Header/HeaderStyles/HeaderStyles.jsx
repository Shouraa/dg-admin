/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    flexGrow: 'row wrap',
    justifyContent: 'space-between',
  },
  logo: {
    color: 'white',
  },
  navlist: {
    minwidth: '250px',
    maxwidth: '300px',
  },
  navAvatar: {
    width: '35px',
    height: '35px',
  },

  listAvatar: {
    backgroundColor: 'primary',
    color: 'white',
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));
