import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import uiReducer from './reducer/uiReducer';
import heroReducer from './reducer/heroReducer';
import rootSaga from './saga/rootSaga';
import nerworkReducer from './reducer/networkReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  uiReducer,
  heroReducer,
  nerworkReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
