import {
  INIT_PEDAL_DATA,
  SELECT_PRODUCTS,
  DELETE_CHIP,
  SELECT_CHART_DATA,
} from '../actions/rankActions';

const initialState = {
  products: [],
  selected: [],
  SelectChartData: [],
};

const rankReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PEDAL_DATA:
      return {
        ...state,
        products: action.payload,
      };

    case SELECT_PRODUCTS:
      return {
        ...state,
        selected: action.payload,
      };
    // case DELETE_CHIP:
    //   return {
    //     ...state,
    //     selected: state.selected.filter((name) => name !== action.payload),
    //   };
    case SELECT_CHART_DATA:
      return {
        ...state,
        SelectChartData: action.payload,
      };

    default:
      return state;
  }
};

export default rankReducer;
