import axios from 'axios';
const API_KEY = 'AIzaSyB8fskVIO0G7-1EGU4O6IOdAWUbYPc6WSo';

export function auth(email, password, isLogin) {
	return async (dispatch) => {
		const authData = {
			email,
			password,
			returnSecureToken: true,
		}
		
		let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
		
		if(isLogin) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
		}
		
		const response = await axios.post(url, authData)
		const data = response.data;
		
		localStorage.setItem('token', data.idToken)

	}
}