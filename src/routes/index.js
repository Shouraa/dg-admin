import React from 'react';
import { AuthRoutes } from './paths';

const Dashboard = React.lazy(() =>
  import('../components/MainComponents/Dashboard/Dashboard')
);
const Utilities = React.lazy(() =>
  import('../components/MainComponents/Utilities')
);
const Account = React.lazy(() =>
  import('../components/MainComponents/Account')
);

const routes = [
  {
    path: `${AuthRoutes.dashboard}`,
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: `${AuthRoutes.utilities}`,
    name: 'Utilities',
    component: Utilities,
    exact: true,
  },
  {
    path: `${AuthRoutes.account}`,
    name: 'Account',
    component: Account,
    exact: true,
  },
];

export default routes;
