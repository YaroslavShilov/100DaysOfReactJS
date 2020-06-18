import {combineReducers} from "redux";
import countReducer from "./count";

export default combineReducers({
	count: countReducer,
})