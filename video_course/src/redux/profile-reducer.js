const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST_TEXT';

let initialState = {
	posts: [
		{id: 1, likesCount:1, message: 'Hello'},
		{id: 2, likesCount:2, message: 'My'},
		{id: 3, likesCount:3, message: 'Friend'},
		{id: 4, likesCount:4, message: 'How'},
		{id: 5, likesCount:5, message: 'Are you?'},
	],
	newPostText: 'text',
};

export const profileReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 6,
				message: state.newPostText,
				likesCount: 0,
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
			
		default:
			return state;
	}
	
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const uppDateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
});