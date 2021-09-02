import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import './App.global.css';
import dgTheme from './configs/dgThemes';
import Admin from './layout/Admin';
import PrivateRoute from './components/PrivateRoute';
import { AuthRoutes, NonAuthRoutes } from './routes';
import Auth from './layout/Auth';

export default function App() {
  return (
    <ThemeProvider theme={dgTheme}>
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
