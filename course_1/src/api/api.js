import * as axios from 'axios';

let instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7"
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
		return instance.get(`profile/${userId}`);
	},
};


export const authAPI = {
	me: () => instance.get(`auth/me`),
}
