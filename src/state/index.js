import { createStore, combineReducers, applyMiddleware } from 'redux';

import * as reducers from './ducks';

const logAction = store => next => action => {
  const result = next(action);
  console.log(`Called from middleware logAction ${JSON.stringify(result)}`);
  return result;
};

export default function configureStore(initialState) {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, applyMiddleware(logAction));
}
