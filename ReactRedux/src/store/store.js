import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

export const store = createStore(reducer, applyMiddleware(logger, thunk));
