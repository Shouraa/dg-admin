import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import Utilities from './Utilities';
// import Account from './Account';

const Parent = () => {
  let { id } = useParams();
  console.log('id', id);
  return <Typography variant="h1">{id}</Typography>;
};

export default Parent;
