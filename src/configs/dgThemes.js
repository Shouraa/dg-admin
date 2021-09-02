import { createTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const dgTheme = createTheme({
  palette: {
    primary: {
      main: '#4d4d4d',
    },
    secondary: red,
  },
});

export default dgTheme;
