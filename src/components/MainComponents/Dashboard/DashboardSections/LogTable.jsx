import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  table: {
    // minWidth: 650
  },

  cancelIcon: {
    color: theme.palette.secondary.main,
  },

  checkIcon: {
    color: '#44b700',
  },
}));

const fakeData = (time, statusCode, request, path) => {
  return { time, statusCode, request, path };
};

const rows = [
  fakeData('Thu Sep 09 2021 00:45:46', '202', 'GET', '/user/login'),
  fakeData('Thu Sep 09 2021 00:45:46', '404', 'GET', '/user/product'),
  fakeData('Thu Sep 09 2021 00:45:46', '202', 'GET', '/user/login'),
  fakeData('Thu Sep 09 2021 00:45:46', '202', 'GET', '/user/login'),
  fakeData('Thu Sep 09 2021 00:45:46', '404', 'GET', '/user/login'),
];

const LogTable = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table
        className={classes.table}
        style={{ tableLayout: 'fixed' }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Status Code</TableCell>
            <TableCell align="center">Request Method</TableCell>
            <TableCell align="center">Path</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {row.statusCode === '404' ? (
                  <CancelIcon className={classes.cancelIcon} />
                ) : (
                  <CheckCircleOutline className={classes.checkIcon} />
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="center">{row.statusCode}</TableCell>
              <TableCell align="center">{row.request}</TableCell>
              <TableCell align="center">{row.path}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LogTable;
