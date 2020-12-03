import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers";
//import thunk from "redux-thunk";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  //applyMiddleware(logger, thunk) //thunk version
  applyMiddleware(logger, sagaMiddleware) //saga version
);

sagaMiddleware.run(watchLoadData);
