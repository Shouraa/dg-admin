import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   'Microtubes X Ultra',
//   'Alpha Omega Ultra v2 ',
//   'Microtubes B7K Ultra v2',
//   'Vintage Ultra v2 ',
//   'Microtubes X7',
//   'Alpha Omega',
//   'Microtubes B7K v2',
//   'Vintage Deluxe v3',
//   'Microtubes X',
// ];

function getStyles(name, productName, theme) {
  return {
    fontWeight:
      productName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TypeSelect = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [productName, setProductName] = useState([]);
  const [category, setCategory] = useState('');

  let filteredData = [];

  if (category === 'Pedal') {
    filteredData = data.products.filter((entry) => entry.type === 'PEDAL');
  } else if (category === 'Amplifier') {
    filteredData = data.products.filter((entry) => entry.type === 'HEAD');
  } else {
    filteredData = data.products.filter((entry) => entry.type === 'CAB');
  }

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeProduct = (event) => {
    const {
      target: { value },
    } = event;
    setProductName(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDeleteChip = (event) => {
    const {
      target: { innerText },
    } = event;

    productName.filter((name) => name !== innerText);
    console.log('You clicked the Chip.', innerText);
  };

  console.log(filteredData);

  return (
    <>
      <div>
        <FormControl
          className={classes.formControl}
          sx={{ m: 1, minWidth: 120 }}
        >
          <FormHelperText>Filter by</FormHelperText>
          <Select
            value={category}
            onChange={handleChangeCategory}
            displayEmpty
            inputProps={{ 'aria-label': 'Select a category' }}
          >
            <MenuItem value="">
              <em>Category</em>
            </MenuItem>
            <MenuItem value="Pedal">Pedal</MenuItem>
            <MenuItem value="Amplifier">Amplifier</MenuItem>
            <MenuItem value="Cabinet">Cabinet</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl} sx={{ m: 1, width: 300 }}>
          <FormHelperText>Filter products</FormHelperText>
          <Select
            labelId="select-product"
            id="select-product"
            multiple
            value={productName}
            onChange={handleChangeProduct}
            overflow="hidden"
            MenuProps={MenuProps}
          >
            {filteredData.map(({ name }) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, productName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {productName.map((value) => (
            <Chip key={value} label={value} onClick={handleDeleteChip} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default TypeSelect;
