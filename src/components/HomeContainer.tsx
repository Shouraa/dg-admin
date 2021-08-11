import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import Utilities from './Utilities';
// import Account from './Account';

const HomeContainer = () => {
  // eslint-disable-next-line prefer-const
  let { id } = useParams();
  return <Typography variant="h1">{id}</Typography>;
};

export default HomeContainer;
