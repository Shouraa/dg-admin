/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, CircularProgress } from '@material-ui/core';

import routes from '../../routes';

const loading = <CircularProgress />;

const AppContent = () => {
  return (
    <Container maxWidth="lg">
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route) => {
            return (
              route.component && (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            );
          })}
          {/* <Redirect from="/" to="/admin" /> */}
        </Switch>
      </Suspense>
    </Container>
  );
};

export default AppContent;
