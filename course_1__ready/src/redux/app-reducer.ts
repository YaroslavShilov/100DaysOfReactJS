import {getAuthUserDate} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
	initialized: false as boolean,
	globalError: false as boolean
}

type InitialStateType = typeof initialState;

type InitializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}

export const appReducer = (
	state = initialState,
	action: any
): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}

		default:
			return state;
	}
}



export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserDate());

	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	})
}