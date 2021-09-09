/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

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
  },

  grow: {
    flexGrow: 1,
  },

  listAvatar: {
    backgroundColor: 'primary',
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));
