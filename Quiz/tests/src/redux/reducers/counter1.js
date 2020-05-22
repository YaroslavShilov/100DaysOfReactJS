import {ADD, ADD_NUMBER, SUB, SUB_NUMBER} from "../actions/actionTypes";


const initialState = {
	counter: 0,
}

export default function counter1(state = initialState, action) {
	function checkCounter(number) {
		const result = state.counter - number;
		return result < 0 ? 0 : result;
	}

	switch (action.type) {
		case ADD:
			return {counter: state.counter + 1};
		case SUB:
			return {counter: checkCounter(1)};
		case ADD_NUMBER:
			return {counter: state.counter + action.payload};
		case SUB_NUMBER:
			return {counter: checkCounter(action.payload)};
		default: return state;
	}
}

