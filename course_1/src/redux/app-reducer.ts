import {getAuthUserDate} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
	initialized: false,
	globalError: false
}

export const appReducer = (state = initialState, action: any) => {
	switch(action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserDate());

	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	})
}