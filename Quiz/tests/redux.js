const redux = require('redux');

const initialState = {
	counter: 0,
}

//reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			return {counter: state.counter + 1};
		case 'SUB':
			return {counter: state.counter - 1};
		case 'ADD_NUMBER':
			return {counter: state.counter + action.value};
		default: return state;
	}
}

//store
const store = redux.createStore(reducer)


//actions
const addCounter = {
	type: 'ADD'
}

store.subscribe(() => {
	console.log('Subscribe', store.getState());
})

store.dispatch(addCounter);
store.dispatch({type: 'SUB'});
store.dispatch({type: 'ADD_NUMBER', value: 22});