import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import Utilities from './Utilities';
// import Account from './Account';

interface ParamTypes {
  id: string | undefined;
}

const HomeContainer = () => {
  const { id } = useParams<ParamTypes>();
  return <Typography variant="h1">{id}</Typography>;
};

export default HomeContainer;
