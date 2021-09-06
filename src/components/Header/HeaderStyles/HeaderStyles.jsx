/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 'auto',
    background: theme.palette.primary,
    backdropFilter: 'blur(8px)',
    boxShadow: '1px 1px 8px #9e9e9e',
    padding: theme.spacing(1, 0),
    zIndex: theme.zIndex.drawer + 1,

    // transition: theme.transitions.create(['width'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 'row wrap',
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

  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));
