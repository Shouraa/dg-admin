import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.global.css';
import Admin from './layout/Admin';
import PrivateRoute from './components/PrivateRoute';
import { AuthRoutes, NonAuthRoutes } from './routes';
import Auth from './layout/Auth';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4d4d4d',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path={NonAuthRoutes.login} component={Auth} />
        <PrivateRoute exact path={AuthRoutes.dashboard} component={Admin} />
        <PrivateRoute exact path={AuthRoutes.utilities} component={Admin} />
        <PrivateRoute exact path={AuthRoutes.account} component={Admin} />
      </Switch>
    </ThemeProvider>
  );
}
