import React from 'react';
import './PostList.css';
import PostListItem from "../PostListItem/PostListItem";

const PostList = ({posts}) => {
	
	const elements = posts.map(post =>
		<li key={post.id} className="list-group-item">
			<PostListItem {...post}/>
		</li>
		
	)
	
	return (
		<ul className={'app-list list-group'}>
			{elements}
		</ul>
	);
}

export default PostList