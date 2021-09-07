/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: () => `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    // marginRight: theme.spacing(2)
  },
  grow: {
    flexGrow: 1,
  },

  appbarSection: {
    display: 'flex',
    // display: "none",
    alignItems: 'center',
    // [theme.breakpoints.up("sm")]: {
    //   display: "flex"
    // }
  },
  // navlist: {
  //   minwidth: '250px',
  //   maxwidth: '300px',
  // },
  // navAvatar: {
  //   width: '35px',
  //   height: '35px',
  // },

  // listAvatar: {
  //   backgroundColor: 'primary',
  //   color: 'white',
  // },

  hide: {
    display: 'none',
  },
}));
