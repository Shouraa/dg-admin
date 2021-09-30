import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rankReducer from '../reducers/rankReducer';

const rootReducer = combineReducers({
  ranks: rankReducer,
});

const middlewares = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
