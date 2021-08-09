import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.global.css';

import { createTheme, ThemeProvider } from '@material-ui/core';

import Drawer from './components/Drawer';
import Login from './components/auth/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4d4d4d',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Drawer} />
      </Switch>
    </ThemeProvider>
  );
}
