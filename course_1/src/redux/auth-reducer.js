import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null, // if it's null, then captcha isn't required
};

export const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
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

export const getAuthUserDate = () => async (dispatch) => {
	const response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let {login, id: userId, email} = response.data.data;
		dispatch(setAuthUserData(userId, email, login, true));
	}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		//success, get auth data
		dispatch(getAuthUserDate());
	}
	else {

		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrl());
		}

		const errorMessage =
			response.data.messages.length > 0
				? response.data.messages[0]
				: 'Something is wrong'

		const action = stopSubmit("login", {_error: errorMessage});
		dispatch(action)
	}
}

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}

const getCaptchaUrlSuccess = (captchaUrl) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: {captchaUrl},
})

export const getCaptchaUrl = () => async (dispatch) => {
	const response = await securityAPI.getCaptchaUrl()
	const captchaUrl = response.data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl));
}