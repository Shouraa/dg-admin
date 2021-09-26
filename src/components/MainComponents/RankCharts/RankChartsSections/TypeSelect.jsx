import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';

import {
  changeCategory,
  selectProducts,
  deleteChip,
  chartData,
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

function getStyles(name, selectedProducts, theme) {
  return {
    fontWeight:
      selectedProducts.indexOf(name) === -1
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

// .............................................................................................................

const TypeSelect = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const ranks = useSelector((state) => state.ranks);
  console.log('ranks', ranks);

  let filteredData = [];

  if (ranks.category === 'Pedal') {
    filteredData = data.products.filter((p) => p.type === 'PEDAL');
  } else if (ranks.category === 'Amplifier') {
    filteredData = data.products.filter((p) => p.type === 'HEAD');
  } else {
    filteredData = data.products.filter((p) => p.type === 'CAB');
  }

  const handleChangeCategory = (event) => {
    const category = event.target.value;
    dispatch(changeCategory(category));
    dispatch(selectProducts([]));
  };

  const handleChangeProduct = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    dispatch(chartData(ranks.products.filter((p) => p.name === value)));
    dispatch(
      selectProducts(typeof value === 'string' ? value.split(',') : value)
    );
  };

  const handleDeleteChip = (event) => {
    const {
      target: { innerText },
    } = event;

    dispatch(deleteChip(innerText));
  };

  console.log('selected', ranks.selected);
  console.log('Filtered', filteredData);

  return (
    <>
      <div>
        <FormControl
          className={classes.formControl}
          sx={{ m: 1, minWidth: 120 }}
        >
          <FormHelperText>Filter by</FormHelperText>
          <Select
            value={ranks.category}
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
            value={ranks.selected}
            onChange={handleChangeProduct}
            overflow="hidden"
            MenuProps={MenuProps}
          >
            {filteredData.map(({ name }) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, ranks.selected, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {ranks.selected.map((value) => (
            <Chip key={value} label={value} onClick={handleDeleteChip} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default TypeSelect;
