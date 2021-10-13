import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Box, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { initializeRankData } from '../../../../actions/rankActions';

const ObjectsToCsv = require('objects-to-csv');

const { remote, ipcRenderer } = require('electron');

const mainProcess = remote.require('./main.dev.ts');
const currentWindow = remote.getCurrentWindow();

const useStyles = makeStyles((theme) => ({
  uploadBox: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(1),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

const UploadFile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const chosenData = useSelector((state) => state.ranks.selectChartData);

  const [selectedFile, setSelectedFile] = useState(undefined);
  // const [message, setMessage] = useState('');
  // const [isError, setIsError] = useState(false);
  // const [fileInfo, setFileInfo] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const openFile = () => {
    mainProcess.uploadFile();
    console.log('you clicked the openfile button');
    ipcRenderer.on('file-opened', (event, fileName, content) => {
      console.log('EVENT', event);
      setSelectedFile(fileName);
      dispatch(initializeRankData(content));
    });
  };

  const saveFile = () => {
    (async () => {
      const csv = new ObjectsToCsv(chosenData);

      // Return the CSV file as string:
      const csvString = await csv.toString();
      console.log(csvString);
      mainProcess.saveCSV(currentWindow, csvString);
    })();
  };

  return (
    <div className={classes.uploadBox}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          sx={{ p: 1, flexGrow: 1 }}
          onClick={openFile}
        >
          Import
        </Button>
        <Box sx={{ marginLeft: 10 }}>
          <Typography>{selectedFile}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', marginBottom: 20 }}>
        <LinearProgress variant="determinate" value="15" />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          sx={{ p: 1, flexGrow: 1 }}
          onClick={saveFile}
        >
          Export .csv
        </Button>
      </Box>
    </div>
  );
};

export default UploadFile;
