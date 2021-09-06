/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, CircularProgress } from '@material-ui/core';

import './App.global.css';
import dgTheme from './configs/dgThemes';
// import Admin from './layout/Admin';
import PrivateRoute from './components/PrivateRoute';
import { AuthRoutes, NonAuthRoutes } from './routes/paths';
import Auth from './layout/Auth';
import LayoutProvider from './contexts/LayoutContext';

const loading = <CircularProgress />;
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

export default function App() {
  return (
    <>
      <CssBaseline />
      <LayoutProvider>
        <ThemeProvider theme={dgTheme}>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path={NonAuthRoutes.login} component={Auth} />
              <PrivateRoute path={AuthRoutes.admin} component={DefaultLayout} />
            </Switch>
          </React.Suspense>
        </ThemeProvider>
      </LayoutProvider>
    </>
  );
}

/* <PrivateRoute exact path={AuthRoutes.dashboard} component={Admin} />
        <PrivateRoute exact path={AuthRoutes.utilities} component={Admin} />
      <PrivateRoute exact path={AuthRoutes.account} component={Admin} /> */
