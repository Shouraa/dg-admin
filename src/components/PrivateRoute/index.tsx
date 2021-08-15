/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface IPrivateRouteProps {
  component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({
  component: Component,
  path,
  exact = false,
}: IPrivateRouteProps): JSX.Element => {
  // TO DO: check user token, and evaluate is it valid
  const token = true;
  return (
    <Route
      path={path}
      exact={exact}
      render={(props: RouteComponentProps) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
