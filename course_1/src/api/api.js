import * as axios from 'axios';

let instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7"
		//"API-KEY": "8615da00-c340-41c4-b7de-7e144d693981"
	},

});


export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unFollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		console.warn('Obsolete method. Please use profileAPI object')
		return profileAPI.getProfile(userId);
	},
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status})
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile)
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-type': 'multipart/form-data'
			}
		})
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile)
	}
}


export const authAPI = {
	me: () => instance.get(`auth/me`),

	login(email, password, rememberMe = false, captcha=null) {
		const user = {email, password, rememberMe, captcha}
		return instance.post(`auth/login`, user)
	},
	logout() {
		return instance.delete(`auth/login`)
	}
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	},
}