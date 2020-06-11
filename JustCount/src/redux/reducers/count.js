import {MINUS, PLUS, RESET} from "../actions/actionTypes";

const initialState = 0;

export default function countReducer(state=initialState, action) {
	switch (action.type) {
		case PLUS: return ++state;
		case MINUS: return --state;
		case RESET: return 0;
		
		default: return state;
	}
}