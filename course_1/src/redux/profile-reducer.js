import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: [
		{id: 1, likesCount:1, message: 'Hello'},
		{id: 2, likesCount:2, message: 'My'},
		{id: 3, likesCount:3, message: 'Friend'},
		{id: 4, likesCount:4, message: 'How'},
		{id: 5, likesCount:5, message: 'Are you?'},
	],
	profile: null,
	status: '',
};

export const profileReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_POST: 
			let newPost = {
				id: (+new Date()).toString(),
				message: action.newPostText,
				likesCount: 0,
			};
			
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId)
			}

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

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId})

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


export const getUserProfile = (userId) => async (dispatch) => {
	const response = await profileAPI.getProfile(userId)

	dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status)
	if(response.data.resultCode === 0) dispatch(setUserStatus(status))
}
