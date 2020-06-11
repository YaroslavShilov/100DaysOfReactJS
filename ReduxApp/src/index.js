import 'bootstrap/dist/css/bootstrap.min.css'
import {createStore} from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return ++state;
		case 'DEC':
			return --state;
		case 'RND':
			return state + action.value;
			
		default: return state;
	}
}

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = (value) => ({type: 'RND', value})

const store = createStore(reducer);

const update = () => {
	document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

document.getElementById('inc').addEventListener('click', () => store.dispatch(inc()))
document.getElementById('dec').addEventListener('click', () => store.dispatch(dec()))
document.getElementById('rnd').addEventListener('click', () => store.dispatch(rnd(Math.floor(Math.random() * 10))))

