import { createStore, combineReducers, applyMiddleware } from 'redux';

import rankReducer from '../reducers/rankReducer';

const rootReducer = combineReducers({
  ranks: rankReducer,
});

const store = createStore(rootReducer);

export default store;
