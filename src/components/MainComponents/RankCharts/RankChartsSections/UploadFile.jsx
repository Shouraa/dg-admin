import React, { useState, useEffect } from 'react';
import { Button, Box, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const { remote } = require('electron');

const mainProcess = remote.require('./main.dev.ts');

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

  const [selectedFile, setSelectedFile] = useState(undefined);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [fileInfo, setFileInfo] = useState('');
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
        <Box>
          <Typography marginLeft>FileName</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value="15" />
      </Box>
    </div>
  );
};

export default UploadFile;
