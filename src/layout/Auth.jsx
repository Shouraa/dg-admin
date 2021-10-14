import { CircularProgress } from '@material-ui/core';
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NonAuthRoutes } from '../routes/paths';

const loginComponent = lazy(() => import('../components/Login/Auth'));

const loading = <CircularProgress />;

const Auth = () => {
  return (
    <Suspense fallback={loading}>
      <Switch>
        <Route path={NonAuthRoutes.login} component={loginComponent} />
      </Switch>
    </Suspense>
  );
};

export default Auth;
