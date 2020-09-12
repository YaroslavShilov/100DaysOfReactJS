import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

export const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state, 
				...action.payload,
			};
			
		
		default:
			return state;

	}

};

const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: {
		userId,
		email,
		login,
		isAuth
	}
});

export const getAuthUserDate = () => (dispatch) => {
	return authAPI.me().then(response => {
		if(response.data.resultCode === 0) {
			let {login, id: userId, email} = response.data.data;
			dispatch(setAuthUserData(userId, email, login, true));
		}
	});
}

export const login = (email, password, rememberMe) => (dispatch) => {

	authAPI.login(email, password, rememberMe).then(response => {
		if(response.data.resultCode === 0 ) {
			dispatch(getAuthUserDate());
		} else {
			const errorMessage =
				response.data.messages.length > 0
					? response.data.messages[0]
					: 'Email or password is wrong'

			const action = stopSubmit("login", {_error: errorMessage});
			dispatch(action)
		}
	})
}

export const logout = () => (dispatch) => {
	authAPI.logout().then(response => {
		if(response.data.resultCode === 0 ) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	})
}