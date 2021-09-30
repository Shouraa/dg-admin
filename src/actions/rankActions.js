import { Category } from '@material-ui/icons';

export const INIT_PEDAL_DATA = 'INIT_PEDAL_DATA';
// export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const SELECT_PRODUCTS = 'SELECT_PRODUCTS';
export const DELETE_CHIP = 'DELETE_CHIP';
export const CHART_DATA = 'CHART_DATA';

const jsonData = require('./data/pedals.json');

export const initializePedalData = () => {
  return async (dispatch) => {
    const data = await jsonData.data;
    dispatch({
      type: INIT_PEDAL_DATA,
      payload: data,
    });
  };
};

// export const changeCategory = (category) => {
//   return async (dispatch) => {
//     dispatch({
//       type: CHANGE_CATEGORY,
//       payload: category,
//     });
//   };
// };

export const selectProducts = (array) => {
  return async (dispatch) => {
    dispatch({
      type: SELECT_PRODUCTS,
      payload: array,
    });
  };
};

export const deleteChip = (chip) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_CHIP,
      payload: chip,
    });
  };
};

export const chartData = (array) => {
  return async (dispatch) => {
    dispatch({
      type: CHART_DATA,
      payload: array,
    });
  };
};
