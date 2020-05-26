import {ADD2, ADD_NUMBER2, SUB2, SUB_NUMBER2} from "../actions/actionTypes";

const initialState = {
	counter: 200,
}

export default function counter2(state = initialState, action) {
	function checkCounter(number) {
		const result = state.counter - number;
		return result < 0 ? 0 : result;
	}

	switch (action.type) {
		case ADD2:
			return {counter: state.counter + 1};
		case SUB2:
			return {counter: checkCounter(1)};
		case ADD_NUMBER2:
			return {counter: state.counter + action.payload};
		case SUB_NUMBER2:
			return {counter: checkCounter(action.payload)};
		default: return state;
	}
}

