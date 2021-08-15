import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import DrawerCustom from '../components/DrawerCustom';
import PrivateRoute from '../components/PrivateRoute';
import { AuthRoutes } from '../routes/index';

const DashboardContainer = lazy(() => import('../components/Dashboard'));
const UtilitiesContainer = lazy(() => import('../components/Utilities'));
const AccountContainer = lazy(() => import('../components/Account'));

const Admin = () => {
  return (
    <Suspense fallback="...loading">
      <DrawerCustom />
      <Switch>
        <PrivateRoute
          path={AuthRoutes.dashboard}
          component={DashboardContainer}
          exact
        />
        <PrivateRoute
          path={AuthRoutes.utilities}
          component={UtilitiesContainer}
          exact
        />
        <PrivateRoute
          path={AuthRoutes.account}
          component={AccountContainer}
          exact
        />
      </Switch>
    </Suspense>
  );
};

export default Admin;
