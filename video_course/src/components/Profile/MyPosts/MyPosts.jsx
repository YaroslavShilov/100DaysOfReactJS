import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsData = props.postsData
		.map(i=><Post message={i.message} like={i.liksCount} key={i.id}/>);
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>

			</div>
			<div className={s.posts}>
				{postsData}
			</div>
		</div>
	)

};

export default MyPosts;