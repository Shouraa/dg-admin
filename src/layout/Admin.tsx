// import React, { Suspense, lazy } from 'react';
// import { Switch } from 'react-router-dom';
// import AppDrawer from '../components/AppDrawer/AppDrawer';
// import PrivateRoute from '../components/PrivateRoute';
// import { AuthRoutes } from '../routes/index';

// const DashboardContainer = lazy(() =>
//   import('../components/MainComponents/Dashboard/Dashboard')
// );
// const UtilitiesContainer = lazy(() =>
//   import('../components/MainComponents/Utilities')
// );
// const AccountContainer = lazy(() =>
//   import('../components/MainComponents/Account')
// );

// const Admin: React.FC = () => {
//   return (
//     <Suspense fallback="...loading">
//       <AppDrawer />
//       <Switch>
//         <PrivateRoute
//           path={AuthRoutes.dashboard}
//           component={DashboardContainer}
//           exact
//         />
//         <PrivateRoute
//           path={AuthRoutes.utilities}
//           component={UtilitiesContainer}
//           exact
//         />
//         <PrivateRoute
//           path={AuthRoutes.account}
//           component={AccountContainer}
//           exact
//         />
//       </Switch>
//     </Suspense>
//   );
// };

// export default Admin;
