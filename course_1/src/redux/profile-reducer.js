import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
	posts: [
		{id: 1, likesCount:1, message: 'Hello'},
		{id: 2, likesCount:2, message: 'My'},
		{id: 3, likesCount:3, message: 'Friend'},
		{id: 4, likesCount:4, message: 'How'},
		{id: 5, likesCount:5, message: 'Are you?'},
	],
	newPostText: 'text',
	profile: null,
	status: '',
};

export const profileReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_POST: 
			let newPost = {
				id: 6,
				message: state.newPostText,
				likesCount: 0,
			};
			
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case SET_USER_STATUS:
			return {
				...state,
				status: action.status
			}

		default: 
			return state;
		
	}
	
};

export const addPost = () => ({type: ADD_POST});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	});
}

export const getUserStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setUserStatus(response.data))
	})
}

export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if(response.data.resultCode === 0) dispatch(setUserStatus(status))
	})
}
export const uppDateNewPostText = newText => ({type: UPDATE_NEW_POST_TEXT, newText});
