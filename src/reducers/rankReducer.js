import { INIT_PEDAL_DATA } from '../actions/rankActions';

const initialState = {
  products: [],
};

const rankReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PEDAL_DATA:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default rankReducer;
