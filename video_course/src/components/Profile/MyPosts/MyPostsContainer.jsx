import React from 'react';
import {addPostActionCreator, uppDateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
	let state = props.store.getState();
	let dispatch = props.store.dispatch;
	
	let addPost = () => dispatch(addPostActionCreator());

	let onPostChange = (text) => {
		let action = uppDateNewPostTextActionCreator(text);
		dispatch(action);
	};
	return (
		<MyPosts
			updateNewPostText={onPostChange} 
			addPost={addPost}
			posts={state.profilePage.posts}
		  newPostText={state.profilePage.newPostText}
		/>
	)

};

export default MyPostsContainer;