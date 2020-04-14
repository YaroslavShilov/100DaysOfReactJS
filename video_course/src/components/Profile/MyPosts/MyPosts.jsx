import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
	
	const postsData = props.posts
		.map(i=><Post message={i.message} like={i.likesCount} key={i.id}/>);
	
	const onAddPost = () => props.addPost();
	
	let onPostChange = (e) => {
		props.updateNewPostText(e.target.value);
	};
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>

			</div>
			<div className={s.posts}>
				{postsData}
			</div>
		</div>
	)

};

export default MyPosts;