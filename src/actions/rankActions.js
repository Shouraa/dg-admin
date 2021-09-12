export const INIT_PEDAL_DATA = 'INIT_PEDAL_DATA';

const jsonData = require('./data/pedals.json');

export const initializePedalData = () => {
  return async (dispatch) => {
    const pedals = await jsonData.data;
    dispatch({
      type: INIT_BLOGS,
      payload: pedals,
    });
  };
};
