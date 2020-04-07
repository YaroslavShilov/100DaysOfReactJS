import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsData = props.postsData
		.map(i=><Post message={i.message} like={i.liksCount} key={i.id}/>);
	
	let newPostElement = React.createRef();
	
	let addPost = ()=> {
		let text = newPostElement.current.value;
		props.addPost(text);
	};
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
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