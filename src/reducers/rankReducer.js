import {
  INIT_PEDAL_DATA,
  DELETE_CHIP,
  SELECT_CHART_DATA,
  CLEAR_CHART_DATA,
} from '../actions/rankActions';

const initialState = {
  products: [],
  selectChartData: [],
};

const rankReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PEDAL_DATA:
      return {
        ...state,
        products: action.payload,
      };

    case DELETE_CHIP:
      return {
        ...state,
        selectChartData: state.selectChartData.filter(
          (p) => p.name !== action.payload
        ),
      };
    case SELECT_CHART_DATA:
      return {
        ...state,
        selectChartData: action.payload,
      };
    case CLEAR_CHART_DATA:
      return {
        ...state,
        selectChartData: initialState.selectChartData,
      };

    default:
      return state;
  }
};

export default rankReducer;
