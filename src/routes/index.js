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
const RankCharts = React.lazy(() =>
  import('../components/MainComponents/RankCharts/RankCharts')
);
const Databases = React.lazy(() =>
  import('../components/MainComponents/Databases')
);

const routes = [
  {
    path: `${AuthRoutes.admin}`,
    name: 'Admin',
    exact: true,
  },
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
  {
    path: `${AuthRoutes.rankCharts}`,
    name: 'RankCharts',
    component: RankCharts,
    exact: true,
  },
  {
    path: `${AuthRoutes.databases}`,
    name: 'Databases',
    component: Databases,
    exact: true,
  },
];

export default routes;
