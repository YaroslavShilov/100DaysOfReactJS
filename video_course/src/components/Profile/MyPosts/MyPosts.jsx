import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const updateNewPostText = props.store.updateNewPostText.bind(props.store);
	const addPost = props.store.addPost.bind(props.store);
	const newPostText = props.profilePage.newPostText;
	const postsData = props.profilePage.posts
		.map(i=><Post message={i.message} like={i.likesCount} key={i.id}/>);
	
	let newPostElement = React.createRef();
	
	let onPostChange = () => {
		let text = newPostElement.current.value;
		updateNewPostText(text);
	};
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>

			</div>
			<div className={s.posts}>
				{postsData}
			</div>
		</div>
	)

};

export default MyPosts;