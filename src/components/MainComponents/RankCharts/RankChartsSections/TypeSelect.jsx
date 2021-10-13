/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

import UploadFile from './UploadFile';

import {
  deleteChip,
  selectChartData,
  clearChartData,
} from '../../../../actions/rankActions';

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

function getStyles(name, products, theme) {
  return {
    fontWeight:
      products.indexOf(name) === -1
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

  chip: {
    margin: theme.spacing(0.15),
  },

  button: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
}));

// .............................................................................................................

const TypeSelect = ({ data }) => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  let filteredData = [];

  if (category === 'Pedal') {
    filteredData = data.products.data.filter((p) => p.type === 'PEDAL');
  } else if (category === 'Amplifier') {
    filteredData = data.products.data.filter((p) => p.type === 'HEAD');
  } else if (category === 'Cabinet') {
    filteredData = data.products.data.filter((p) => p.type === 'CAB');
  }

  const handleChangeCategory = (event) => {
    const category = event.target.value;
    setCategory(category);
    setProducts([]);
    dispatch(clearChartData());
  };

  const handleChangeProduct = (event) => {
    const {
      target: { value },
    } = event;

    const productNames = typeof value === 'string' ? value.split(',') : value;

    dispatch(
      selectChartData(
        data.products.data.filter((p) => productNames.includes(p.name))
      )
    );
    setProducts(productNames);
  };

  const handleDeleteChip = (event) => {
    const {
      target: { innerText },
    } = event;

    dispatch(deleteChip(innerText));
    setProducts(products.filter((name) => name !== innerText));
  };

  return (
    <>
      <FormControl>
        <UploadFile />
      </FormControl>

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
            value={products}
            onChange={handleChangeProduct}
            overflow="hidden"
            MenuProps={MenuProps}
          >
            {filteredData.map(({ name }) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, products, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {products.map((value) => (
            <Chip
              color="#f5f5f5"
              className={classes.chip}
              key={value}
              label={value}
              onClick={handleDeleteChip}
            />
          ))}
        </Box>
      </div>
    </>
  );
};

export default TypeSelect;
