import { INIT_PEDAL_DATA } from '../actions/rankActions';

const initialState = {
  pedals: [],
};

const rankReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PEDAL_DATA:
      return {
        ...state,
        pedals: action.payload,
      };

    default:
      return state;
  }
};

export default rankReducer;
