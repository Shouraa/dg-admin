import { INIT_PEDAL_DATA } from '../actions/rankActions';
import { CHANGE_CATEGORY } from '../actions/rankActions';
import { SELECT_PRODUCTS } from '../actions/rankActions';
import { DELETE_CHIP } from '../actions/rankActions';
import { CHART_DATA } from '../actions/rankActions';

const initialState = {
  products: [],
  category: '',
  selected: [],
  chartData: [],
};

const rankReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PEDAL_DATA:
      return {
        ...state,
        products: action.payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SELECT_PRODUCTS:
      return {
        ...state,
        selected: action.payload,
      };
    case DELETE_CHIP:
      return {
        ...state,
        selected: state.selected.filter((name) => name !== action.payload),
      };

    case CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
      };

    default:
      return state;
  }
};

export default rankReducer;
