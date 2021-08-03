import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  myStyles: {
    fontStyle: 'oblique',
  },
});

interface User {
  name: string;
  id: number;
}

const SandBox = () => {
  const classes = useStyles();
  const user: User = {
    name: 'asghar',
    id: 0,
  };
  return (
    <div>
      <Typography className={classes.myStyles} variant="h1">
        Darkglass Admin App {user.name}
      </Typography>
      <Button variant="outlined" color="primary" fullWidth>
        Login
      </Button>
    </div>
  );
};

export default SandBox;
