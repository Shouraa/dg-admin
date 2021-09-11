import { combineReducers } from 'redux';

import { rankReducer } from './rankReducer';

export const rootReducer = combineReducers({
  rank: rankReducer,
});
