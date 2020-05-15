import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./Reducers";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas";
//Devtool Xtention:
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const sagaMiddleWare = createSagaMiddleware();

/*
const store = {
  ...createStore(allReducers, applyMiddleware(sagaMiddleware)),
  runSaga: sagaMiddleware.run(rootSaga)
};
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

// LANZAR MIDDLEWARE
sagaMiddleWare.run(rootSaga);

export default store;
