/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import path from 'path';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// interface IPrivateRouteProps {
//   component: React.FC<RouteComponentProps>;
//   path: string;
//   exact?: boolean;
// }

// const PrivateRoute = ({
//   component: Component,
//   path,
//   exact = false,
// }: IPrivateRouteProps): JSX.Element => {
//   // TO DO: check user token, and evaluate is it valid
//   const token = true;
//   return (
//     <Route
//       path={path}
//       exact={exact}
//       render={(props: RouteComponentProps) =>
//         token ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// };

const PrivateRoute = ({ path, exact, component }) => {
  const token = true;
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        token ? <component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
