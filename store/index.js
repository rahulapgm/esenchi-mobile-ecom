import {fromJS} from "immutable";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

import rootSagas from "./sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();
export const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSagas);
  // const store = createStore(()=>{});
  store.asyncReducers = {}; // Async reducer registry
  store.asyncSagas = {}; // Async saga registry
  return store;
};




