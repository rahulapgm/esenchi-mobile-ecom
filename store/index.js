import { fromJS, Map } from "immutable";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

import rootSagas from "./sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (__DEV__) {
  reduxDevTools = window["__REDUX_DEVTOOLS_EXTENSION__"];
  middlewares.push(createLogger({
    level: "info",
    collapsed: true,
    stateTransformer: state => state.toJS()
  }));
}
export const configureStore = (initialState = Map({})) => {
  const enhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSagas);
  // const store = createStore(()=>{});
  store.asyncReducers = {}; // Async reducer registry
  store.asyncSagas = {}; // Async saga registry
  return store;
};




