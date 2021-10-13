export const INIT_RANK_DATA = 'INIT_RANK_DATA';
export const DELETE_CHIP = 'DELETE_CHIP';
export const SELECT_CHART_DATA = 'SELECT_CHART_DATA';
export const CLEAR_CHART_DATA = 'CLEAR_CHART_DATA';

// const jsonData = require('./data/pedals.json');

export const initializeRankData = (data) => {
  return async (dispatch) => {
    // const data = await jsonData.data;
    dispatch({
      type: INIT_RANK_DATA,
      payload: data,
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

export const selectChartData = (array) => {
  return async (dispatch) => {
    dispatch({
      type: SELECT_CHART_DATA,
      payload: array,
    });
  };
};

export const clearChartData = () => {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_CHART_DATA,
    });
  };
};
