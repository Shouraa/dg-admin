import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import './App.global.css';

import { createTheme, ThemeProvider } from '@material-ui/core';

import Drawer from './components/Drawer';
import Login from './components/auth/Login';
import SignUp from './components/Signup';

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
        <Route path="/dashboard" component={Drawer} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </ThemeProvider>
  );
}
